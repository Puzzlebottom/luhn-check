const chai = require('chai');
const assert = chai.assert;

const check = require('../check');

describe('check', () => {
  it('should throw an error if passed no arguments', () => {
    const expectedOutput = "check() requires 1 argument: the number to be checked";
    assert.throws(() => check(), expectedOutput);
  });

  it('should throw an error if passed more than 1 argument', () => {
    const expectedOutput = "check() requires 1 argument: the number to be checked";
    assert.throws(() => check(1, 2), expectedOutput);
  });

  it('should throw an error if the argument is not a number', () => {
    const input = "string";
    const expectedOutput = "check() requires 1 argument: the number to be checked";
    assert.throws(() => check(input), expectedOutput);
  });

  it('should return a boolean', () => {
    const input = 10;
    assert.isBoolean(check(input));
  });

  it('should return false if the number has only one digit', () => {
    const input = 1;
    const expectedOutput = false;
    assert.equal(check(input), expectedOutput);
  });

  it('should return true if the input is valid');
});