'use strict';

var assert = require('assert');
var reporter = require('../');

describe('Stats reporter', function () {

  beforeEach(function () {
    this.log = console.log;
    this.out = "";
    console.log = function (message) {
      this.out += message + '\n';
    }.bind(this);
  });

  afterEach(function () {
    console.log = this.log;
  });

  it('should display formatted result', function () {
    reporter.push(0, {
      "domInteractive": 2100,
      "domComplete": 4300
    });
    var output = JSON.parse(this.out);

    assert(output.date);
    assert.equal(2.1, output.domInteractive.median);
    assert.equal(4.3, output.domComplete.median);

  });
});
