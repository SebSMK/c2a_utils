var promise_fs = require('./promise-fs');
var logging = require('./logging');


module.exports = {
  createWriteStreamPromise: promise_fs.createWriteStreamPromise,
  logging: logging
}


