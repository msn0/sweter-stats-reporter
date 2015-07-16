'use strict';

var foo;

var promisePush = function (data, resolve) {
  console.log(JSON.stringify(data.metrics));
  resolve();
};

module.exports.init = function (options) {
  foo = options.foo;
};

module.exports.push = function (timestamp, metrics) {
  return new Promise(promisePush.bind(this, {
    timestamp: timestamp,
    metrics: metrics
  }));
};