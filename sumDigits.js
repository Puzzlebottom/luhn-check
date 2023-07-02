const generateDigitArray = require("./generateDigitArray");

const sumDigits = function(number) {

  const inValidArg = "sumDigits() requires 1 argument: the number whose digits will be summed";
  const error = (message) => new Error(message);


  if (!number) throw error(inValidArg);
  if (arguments.length > 1) throw error(inValidArg);
  if (isNaN(number)) throw error(inValidArg);

  let sum = 0;
  let digitArray = generateDigitArray(number);

  for (let digit of digitArray) {
    sum += digit;
  }

  return sum;
};

module.exports = sumDigits;