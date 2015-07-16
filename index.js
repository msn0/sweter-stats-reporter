'use strict';

var median = require('stats-median');
var metrics = [];
var result = {};

function getMedian() {
  return median.calc(metrics.map(function (metric) {
    return 1 * (metric.domInteractive / 1000).toFixed(2);
  }));
}

function promisePush(data, resolve) {
  metrics.push(data.metrics);
  result.domInteractive = {
    median: getMedian()
  };
  console.log(JSON.stringify(result));
  resolve();
}

module.exports.init = function () {
};



module.exports.push = function (timestamp, metrics) {
  return new Promise(promisePush.bind(this, {
    timestamp: timestamp,
    metrics: metrics
  }));
};