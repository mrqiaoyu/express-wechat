var express = require('express');
var router = express.Router();

let utils = require("../utils/u");
let log = utils.log;
let wx = utils.wx;

router.get('/', function(req, res, next) {
  res.send("access_token: " + wx.access_token);
});

module.exports = router;
