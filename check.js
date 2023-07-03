const generateDigitArray = require("./generateDigitArray");
const sumDigits = require("./sumDigits");

const check = function(number) {

  const noArg = "arg cannot be undefined! check() requires 1 argument: the number to be checked";
  const tooManyArgs = "too many args! check() requires 1 argument: the number to be checked";
  const invalidArg = "arg is NaN! check() requires 1 argument: the number to be checked";
  const error = (message) => new Error(message);

  if (!number) throw error(noArg);
  if (arguments.length > 1) throw error(tooManyArgs);
  if (isNaN(number)) throw error(invalidArg);

  let digitArray = generateDigitArray(number);
  let checkNumber = digitArray.pop();
  let checkSum = 0;

  for (let i = digitArray.length - 1; i >= 0; i -= 1) {
    checkSum += (i % 2) ? sumDigits(digitArray[i] * 2) : digitArray[i];
  }

  return checkNumber === 10 - (checkSum % 10);
};

module.exports = check;