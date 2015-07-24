'use strict';

var median = require('stats-median');
var metrics = [];

function getMedianFor(type) {
  return median.calc(metrics.map(function (metric) {
    return metric[type] / 1000;
  }));
}

function promisePush(data, resolve) {
  metrics.push(data.metrics);
  var result = {
    date: new Date().toISOString(),
    timeToFirstByte: {
      median: getMedianFor("timeToFirstByte").toFixed(2) * 1
    },
    domInteractive: {
      median: getMedianFor("domInteractive").toFixed(2) * 1
    },
    domComplete: {
      median: getMedianFor("domComplete").toFixed(2) * 1
    }
  };
  console.log(JSON.stringify(result));
  resolve();
}

module.exports.init = function () {
};

module.exports.finalize = function () {
  metrics = [];
};

module.exports.getMetrics = function () {
  return metrics;
};

module.exports.push = function (timestamp, metrics) {
  return new Promise(promisePush.bind(this, {
    timestamp: timestamp,
    metrics: metrics
  }));
};