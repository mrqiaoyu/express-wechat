let request = require ('superagent');
let q = require ('q');

function post(url, params) {
  let defer = q.defer();
  request
    .post(url)
    .send(JSON.stringify(params))
    .set ('Content-type', 'application/json-rpc')
    .then(res => {
      defer.resolve(res.body.result);
    }).catch( err => {
    defer.reject(err)
  });
  return defer.promise;
}

function get(url) {
  let defer = q.defer();
  request
    .get(url)
    .then(res => {
      defer.resolve(res.body);
    }).catch( err => {
      defer.reject(err)
  });
  return defer.promise;
}

exports.get = get;
exports.post = post;

