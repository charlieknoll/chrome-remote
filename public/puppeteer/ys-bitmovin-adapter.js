let ysPlayer = function () {
  return document.getElementById('player').contentWindow.bitmovin.player()
}

var chromeRemote = {
  play: function () {
    ysPlayer().play()
  },
  pause: function () {
    ysPlayer().pause()
  },
  toggleFullScreen: function () {
    if (ysPlayer().isFullscreen()) {
      ysPlayer().exitFullscreen()
    } else {
      ysPlayer().enterFullscreen()
    }
  },
  getCurrentTimeDisplay: function () {
    return 'LIVE'
  }
}

//Clear ad box
window.setTimeout(() => {
  console.log('playing...')
  chromeRemote.play()
  chromeRemote.toggleFullScreen()
  document
    .getElementById('player')
    .contentDocument.getElementById('player')
    .querySelector('img')
    .click()
}, 1000)
