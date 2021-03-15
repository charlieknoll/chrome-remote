var mediaDetector = {
  detect: function () {
    if (window.nbcsplayer != undefined) return "nbcsports-adapter.js";
    var player = document.getElementById("player");
    //return 'test'
    if (player && !player.contentWindow) {
      return "video-adapter.js";
    }
    //if (player.contentWindow.bitmovin != undefined)
    //return "ys-bitmovin-adapter.js";
    //if (player.contentWindow.player != undefined)
    var iframeEl = document.querySelector("iframe[name='tmaplayer']");
    if (iframeEl) {
      return (
        "iframe[name='tmaplayer']#" + iframeEl.src + "#ys-player-adapter.js"
      );
    }
    return false;
  },
};
