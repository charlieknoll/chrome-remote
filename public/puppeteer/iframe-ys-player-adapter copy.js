let chromeRemotePlayer = function () {
  return player;
};
var chromeRemote = {
  play: function () {
    chromeRemotePlayer().play();
  },
  pause: function () {
    chromeRemotePlayer().pause();
  },
  seek: function (t) {
    chromeRemotePlayer().seek(
      chromeRemotePlayer().getCurrentTime() + parseInt(t)
    );
  },
  getCurrentTimeDisplay: function () {
    return (
      parseInt(chromeRemotePlayer().getCurrentTime()) +
      " / " +
      parseInt(chromeRemotePlayer().getDuration())
    );
  },
  toggleFullScreen: function () {
    document
      .querySelector("#player")
      .contentDocument.querySelector("#player")
      .querySelector("button[data-fullscreen]")
      .click();
  },
};

//Clear ad box
window.setTimeout(() => {
  console.log("playing...");
  chromeRemote.play();
  chromeRemote.toggleFullScreen();
  document
    .querySelector("#player")
    .contentDocument.querySelector("#player")
    .querySelector("img[onclick]")
    .click();
}, 500);
