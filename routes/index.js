var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/remote', function (req, res, next) {
  res.sendFile(path.join(__dirname + './../public/remote.html'));
});

module.exports = router;
