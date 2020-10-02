function ViewModel() {
  this.status = ko.observable(' | ')
  this.getStatus = async function () {
    try {
      const response = await fetch(window.location.origin + '/player/status')
      if (response.status != 200)
        console.log('Error occurred on getting status')
      return await response.json()
    } catch (e) {
      console.error(e)
    }
  }
  this.setupHandlers = async function (className) {
    ;[].slice.call(document.getElementsByClassName(className)).map((i) => {
      i.onclick = async function (e) {
        e.preventDefault()
        let path = e.target.dataset.path
        if (!path) path = e.target.parentNode.dataset.path
        if (!path) path = e.target.parentNode.parentNode.dataset.path
        let param = e.target.dataset.param
          ? '/' + encodeURIComponent(e.target.dataset.param)
          : ''

        try {
          await fetch(window.location.origin + '/player/' + path + param)
        } catch (e) {
          console.error(e)
        }
      }
    })
  }
  this.init = async function () {
    console.log('init')
    await this.setupHandlers('remote-button')
    await this.setupHandlers('channel-button')

    // window.setInterval(async function () {
    //   var status = await viewModel.getStatus()
    //   viewModel.status(status.currentTimeDisplay)
    // }, 1000)
  }
}
var viewModel = new ViewModel()
ko.applyBindings(viewModel)
viewModel.init()
