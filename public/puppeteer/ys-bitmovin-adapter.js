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
  },
  seek: function (t) {
    //if live use timeShift
    if (ysPlayer().isLive()) {
      const timeShift = ysPlayer().getTimeShift()
      const maxTimeShift = ysPlayer().getMaxTimeShift()
      const delta = parseInt(t)
      if (delta + timeShift > 0) {
        ysPlayer().timeShift(0)
        return
      }
      if (delta + timeShift < maxTimeShift) {
        ysPlayer().timeShift(maxTimeShift)
        return
      }
      ysPlayer().timeShift(delta + timeShift)
    }
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
