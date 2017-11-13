var mkdirp = require('mkdirp'),
    fs = require('fs'),
    getDirName = require('path').dirname;
    

module.exports = {
  createWriteStreamPromise: createWriteStreamPromise
}

function createWriteStreamPromise(path) {
  return new Promise(function(resolve, reject) {
      mkdirp(getDirName(path), function (err) {
        if (err) reject(err);
        else resolve(fs.createWriteStream(path));
      });
  });
}
