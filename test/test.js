'use strict';

var assert = require('assert');
var reporter = require('../');

describe('Stats reporter', function () {

  var data, log, out;

  beforeEach(function () {
    log = console.log;
    out = "";
    console.log = function (message) {
      out += message + '\n';
    }.bind(this);
    data = {
      "domInteractive": 2100,
      "domComplete": 4300,
      "timeToFirstByte": 430
    };
  });

  afterEach(function () {
    console.log = log;
  });

  it('should display formatted result', function () {
    reporter.push(0, data);
    var output = JSON.parse(out);

    assert(output.date);
    assert.equal(0.43, output.timeToFirstByte.median);
    assert.equal(2.1, output.domInteractive.median);
    assert.equal(4.3, output.domComplete.median);
  });

  it('should reset metrics when done', function () {
    reporter.push(0, data);

    reporter.finalize();

    assert.deepEqual([], reporter.getMetrics());
  });

});
