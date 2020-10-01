var chromeRemote = {
  play: async function () { await document.getElementById('viper-player-container').children[0].play() },
  pause: nbcsplayer.pause,
  currentTimeEl: document.querySelector('.time-container > span'),
  totalTimeEl: document.querySelector('.total-time'),
  currentTime: function () { return nbcsplayer.api.timeUtil.formatStringToSeconds(this.currentTimeEl.innerText) },
  seek: function (t) {
    var currentTime = chromeRemote.currentTime()
    var seekTime = Number(t)
    if (currentTime) {
      seekTime = Number(currentTime) + Number(t)
    }
    nbcsplayer.seek(seekTime)
  },
  getCurrentTimeDisplay: function () { return this.currentTimeEl.innerText + ' / ' + this.totalTimeEl.innerText },
  toggleFullScreen: nbcsplayer.toggleFullScreen
}
