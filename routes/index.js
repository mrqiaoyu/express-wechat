var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // function test(){
    console.log('eee');
    // let url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET"
    // let rq = require("../utils/request/superagent");
    // rq.get(url)
  // }
  res.render('inddex', { title: 'Esxpress' });
});

module.exports = router;
