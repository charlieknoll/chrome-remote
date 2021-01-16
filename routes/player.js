var express = require("express");
var router = express.Router();
var { playerController } = require("./../services/");
const asyncHandler = require("express-async-handler");
/* GET home page. */
router.get(
  "/seek/:t",
  asyncHandler(async function (req, res, next) {
    await playerController.seek(req.params.t);
    res.writeHead(200);
    res.end();
  })
);
router.get(
  "/play",
  asyncHandler(async function (req, res, next) {
    await playerController.play();
    res.writeHead(200);
    res.end();
  })
);
router.get(
  "/pause",
  asyncHandler(async function (req, res, next) {
    await playerController.pause();
    res.writeHead(200);
    res.end();
  })
);
router.get(
  "/status",
  asyncHandler(async function (req, res, next) {
    const result = await playerController.status();
    res.send(result);
  })
);
router.get(
  "/toggle",
  asyncHandler(async function (req, res, next) {
    await playerController.toggle();
    res.writeHead(200);
    res.end();
  })
);
router.get(
  "/channel/:url",
  asyncHandler(async function (req, res, next) {
    await playerController.channel(req.params.url);
    res.writeHead(200);
    res.end();
  })
);

module.exports = router;
