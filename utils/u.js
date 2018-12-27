let wx = require("./wx/wx");
let superAgent = require("./request/superagent");
let log = require("./node-petl/index").log;

module.exports = {

  /**
   * 获取微信公众号的信息
   */
  wx,

  /**
   * log 工具
   */
  log,
  superangent: superAgent
};