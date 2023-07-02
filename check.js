const generateDigitArray = require("./generateDigitArray");

const check = function(number) {

  const inValidArg = "check() requires 1 argument: the number to be checked";
  const error = (message) => new Error(message);


  if (!number) throw error(inValidArg);
  if (arguments.length > 1) throw error(inValidArg);
  if (isNaN(number)) throw error(inValidArg);

  let result = false;

  let digitArray = generateDigitArray(number);
  let checkNumber = digitArray.pop();

  for (let i = digitArray.length - 1; i >= 0; i -= 2) {
    digitArray[i] *= 2;
  }

  return result;
};

module.exports = check;