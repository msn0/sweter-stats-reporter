'use strict';

var assert = require('assert');
var reporter = require('../');

describe('Custom reporter', function () {

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
      "domInteractive": 2100
    });

    assert.equal(this.out, "{\"domInteractive\":{\"median\":2.1}}\n");
  });
});
