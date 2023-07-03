const generateDigitArray = function(number) {

  const noArg = "arg cannot be undefined! generateDigitArray() requires 1 argument: the number to be converted into an array";
  const tooManyArgs = "too many args! generateDigitArray() requires 1 argument: the number to be converted into an array";
  const invalidArg = "arg is NaN! generateDigitArray() requires 1 argument: the number to be converted into an array";
  const error = (message) => new Error(message);


  if (!number) throw error(noArg);
  if (arguments.length > 1) throw error(tooManyArgs);
  if (isNaN(number)) throw error(invalidArg);

  let digitArray = [];
  while (number) {
    let digit = number % 10;
    digitArray.push(digit);
    number = (number - digit) / 10;
  }

  digitArray.reverse();

  return digitArray;
};

module.exports = generateDigitArray;
