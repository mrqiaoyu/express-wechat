let fs = require("fs");
let path = require("path");
// let req = require("../../u").superangent;
let req = require("../../request/superagent");
let api = require("../api/wx_api");

const N = {
  appId: "appid",
  appSecret: "appsecret",
  accessToken: "access_token",
  accessTokenTime: "access_token_time",

  accessTokenFreshTime: 30, // minutes

  wxConfig: 'config/wx.json',
};

let config = wxJson();

let urls = {
  accessToken: formatApi(api.access_token, [N.appId, N.appSecret]),
};

function formatApi (url, data){
  for (let d of data) {
    url = url.replace(d.toUpperCase(), config[d])
  }
  return url;
}

function wxJson() {
  let configPath = path.resolve("./", N.wxConfig);
  let config = {};
  try {
    config = JSON.parse(fs.readFileSync(configPath));
  } catch (e) {
    console.log(e)
  }
  return config;
}

function setWxJson() {
  let configPath = path.resolve("./", N.wxConfig);
  fs.writeFileSync(configPath,JSON.stringify(config))
}

function getAppId() {
  return config[N.appId] || '';
}

function getAppSecret() {
  return config[N.appSecret] || '';
}

function getAccessToken() {
  let accessTokenTime = config[N.accessTokenTime] || '';
  let currentTime = Date.now();
  let isReGetAccessToken = accessTokenTime < (currentTime - N.accessTokenFreshTime * 60 * 1000);

  if (accessTokenTime === '' || isReGetAccessToken ) {
    req.get(urls.accessToken).then(result => {
      config[N.accessToken] = result['access_token'];
      config[N.accessTokenTime] = currentTime;
      setWxJson();
    });
  }
  return config[N.accessToken];
}

module.exports = {
  appid:        getAppId(),              // 提供 appid
  appsecret:    getAppSecret(),          // 提供 appsecret
  access_token: getAccessToken(),        // 提供 access_token
};