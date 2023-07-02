const chai = require('chai');
const assert = chai.assert;

const check = require('../check');

describe('check', function() {
  it('should throw an error if passed no arguments', function() {
    const expectedOutput = "check() requires 1 argument: the number to be checked";
    assert.throws(() => check(), expectedOutput);
  });
  it('should throw an error if passed more than 1 argument', function() {
    const expectedOutput = "check() requires 1 argument: the number to be checked";
    assert.throws(() => check(1, 2), expectedOutput);
  });
});