var mediaDetector = {
  detect: function () {
    if (window.nbcplayer != undefined) return "nbcsports-adapter.js";
    var player = document.getElementById("player");
    //return 'test'
    if (!player.contentWindow) return;
    //if (player.contentWindow.bitmovin != undefined)
    //return "ys-bitmovin-adapter.js";
    //if (player.contentWindow.player != undefined)
    return "iframe[name='tmaplayer']#" + player.src + "#ys-player-adapter.js";
  },
};
