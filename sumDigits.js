const generateDigitArray = require("./generateDigitArray");

const sumDigits = function(number) {

  const noArg = "arg cannot be undefined! sumDigits requires 1 argument: the number whose digits are to be summed";
  const tooManyArgs = "too many args! sumDigits requires 1 argument: the number whose digits are to be summed";
  const invalidArg = "arg is NaN! sumDigits requires 1 argument: the number whose digits are to be summed";
  const error = (message) => new Error(message);


  if (!number) throw error(noArg);
  if (arguments.length > 1) throw error(tooManyArgs);
  if (isNaN(number)) throw error(invalidArg);

  let sum = 0;
  let digitArray = generateDigitArray(number);

  for (let digit of digitArray) {
    sum += digit;
  }

  return sum;
};

module.exports = sumDigits;