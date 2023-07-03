const chai = require('chai');
const assert = chai.assert;

const sumDigits = require('../sumDigits');

describe('sumDigits', () => {
  it('should throw an error if passed no arguments', () => {
    const expectedOutput = "arg cannot be undefined! sumDigits requires 1 argument: the number whose digits are to be summed";
    assert.throws(() => sumDigits(), expectedOutput);
  });

  it('should throw an error if passed more than 1 argument', () => {
    const expectedOutput = "too many args! sumDigits requires 1 argument: the number whose digits are to be summed";
    assert.throws(() => sumDigits(1, 2), expectedOutput);
  });

  it('should throw an error if the argument is not a number', () => {
    const input = "string";
    const expectedOutput = "arg is NaN! sumDigits requires 1 argument: the number whose digits are to be summed";
    assert.throws(() => sumDigits(input), expectedOutput);
  });

  it('should return a number', () => {
    const input = 10;
    assert.isNumber(sumDigits(input));
  });

  it("should return the correct sum of the number's digits", () => {
    const input = 12345;
    const expectedOutput = 15;
    assert.equal(sumDigits(input), expectedOutput);
  });
});