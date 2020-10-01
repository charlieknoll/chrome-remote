const puppeteer = require('puppeteer-core')
const { spawnAsync } = require('./utils')
const path = require('path')
const fs = require('fs').promises

const cmdPath = path.join(__dirname + './../bin/chrome-debugging.bat')

var port = normalizePort(process.env.PORT || '8085')
function normalizePort(val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}
const url = 'http://localhost:' + port + '/'
const backendUrl = url + 'backend.html'
const pageProvider = {
  connect: async function () {
    browser = await puppeteer.connect({
      browserURL: 'http://127.0.0.1:9222',
      defaultViewport: null
    })
    const pages = await browser.pages()
    for (var i = 0; i < pages.length; i++) {
      if (
        await pages[i].evaluate(() => {
          return window.chromeRemote != null
        })
      ) {
        console.log('connected to existing page')
        this.page = pages[i]
      }
      if (pages[i].url().includes('yoursports.stream')) {
        this.page = pages[i]
        console.log('connected to: ' + pages[i].url())
      }
      if (pages[i].url() == backendUrl) {
        this.page = pages[i]
      }
    }
    if (!this.page) {
      this.page = await browser.newPage()
      const response = await this.page.goto(backendUrl, { waitUntil: 'load' })
    }
    if (this.page) this.page.on('load', await this.setup)
  },
  page: null,
  setup: async function () {
    //inject javascript detector
    await pageProvider.page.addScriptTag({
      url: url + 'puppeteer/media-detector.js'
    })
    var script = await pageProvider.page.evaluate(() => {
      return mediaDetector.detect()
    })
    if (script) {
      console.log('connected to: ' + pageProvider.page.url())
      console.log('Injecting: ' + script)
      await pageProvider.page.addScriptTag({
        url: url + 'puppeteer/' + script
      })
    }
  },
  init: async function () {
    try {
      await this.connect()
    } catch (e) {
      //const result = await execShellCommand(cmdPath)
      try {
        await spawnAsync('cmd.exe', ['/c', cmdPath])
        //await spawnAsync(cmdPath);
        await this.connect()
      } catch (e) {
        console.log(e)
        console.log(
          'TIP: Make sure all chrome.exe instances are closed so that chrome can start with remote debugging enabled.'
        )
      }
    }
  }
}
pageProvider.init()

module.exports = pageProvider
