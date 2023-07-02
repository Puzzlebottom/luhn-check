const chai = require('chai');
const generateDigitArray = require('../generateDigitArray');

const assert = chai.assert;


describe('check', () => {
  it('should throw an error if passed no arguments', () => {
    const expectedOutput = "generateDigitArray() requires 1 argument: the number to be converted into an array";
    assert.throws(() => generateDigitArray(), expectedOutput);
  });

  it('should throw an error if passed more than 1 argument', () => {
    const expectedOutput = "generateDigitArray() requires 1 argument: the number to be converted into an array";
    assert.throws(() => generateDigitArray(1, 2), expectedOutput);
  });

  it('should throw an error if the argument is not a number', () => {
    const input = "string";
    const expectedOutput = "generateDigitArray() requires 1 argument: the number to be converted into an array";
    assert.throws(() => generateDigitArray(input), expectedOutput);
  });

  it('should return an array', () => {
    const input = 1;
    assert.isArray(generateDigitArray(input));
  });

  it('should return an array of the correct digits', () => {
    const input = 1234567890;
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    assert.deepEqual(generateDigitArray(input), expectedOutput);
  });
});