const chai = require('chai');
const assert = chai.assert;

const check = require('../check');

describe('check', function() {
  it('should throw an error if passed no arguments', function() {
    const expectedOutput = "check() requires a number to be provided as the argument";
    assert.throws(() => check(), expectedOutput);
  });
});