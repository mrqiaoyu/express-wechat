let config = require("./config/config");
let api = require("./api/wx_api");

module.exports = {
  /**
   * 获取微信 appid
   */
  appid: config.appid,

  /**
   * 获取微信 appsecret
   */
  appsecret: config.appsecret,

  /**
   * 获取微信 access_token
   */
  access_token: config.access_token,

  // /**
  //  * 获取微信 access_token 的 api
  //  */
  // api_access_token: api.access_token_api
};