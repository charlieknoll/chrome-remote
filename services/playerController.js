const pageProvider = require('./pageProvider')

const playerController = {
  seek: async function (t) {
    await pageProvider.pageFrame.evaluate((t) => {
      chromeRemote.seek(t)
    }, t)
  },
  play: async function () {
    await pageProvider.pageFrame.evaluate(() => {
      chromeRemote.play()
    })
  },
  pause: async function () {
    await pageProvider.pageFrame.evaluate(() => {
      chromeRemote.pause()
    })
  },
  status: async function () {
    const result = await pageProvider.pageFrame.evaluate(() => {
      return {
        currentTimeDisplay: chromeRemote.getCurrentTimeDisplay()
      }
    })
    return result
  },
  toggle: async function () {
    await pageProvider.pageFrame.evaluate(() => {
      chromeRemote.toggleFullScreen()
    })
  },
  channel: async function (url) {
    await pageProvider.page.goto(url, { waitUntil: 'load' })
  }
}
module.exports = playerController
