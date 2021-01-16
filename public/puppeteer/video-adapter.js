let chromeRemotePlayer = function () {
  return document.getElementsByTagName('video')[0]
}
var chromeRemote = {
  play: function () {
    chromeRemotePlayer().play()
  },
  pause: function () {
    chromeRemotePlayer().pause()
  },
  seek: function (t) {
    chromeRemotePlayer().currentTime =
      chromeRemotePlayer().currentTime + parseInt(t)
  },
  getCurrentTimeDisplay: function () {
    return (
      parseInt(chromeRemotePlayer().currentTime) +
      ' / ' +
      parseInt(chromeRemotePlayer().duration)
    )
  },
  toggleFullScreen: function () {
    if (chromeRemotePlayer().webkitDisplayingFullscreen) {
      chromeRemotePlayer().webkitExitFullScreen()
    } else {
      chromeRemotePlayer().webkitRequestFullScreen()
    }
  }
}

//Clear ad box
window.setTimeout(() => {
  console.log('playing...')
  chromeRemote.play()
  chromeRemote.toggleFullScreen()
}, 500)
