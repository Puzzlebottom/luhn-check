const generateDigitArray = function(number) {

  const inValidArg = "generateDigitArray() requires 1 argument: the number to be converted into an array";
  const error = (message) => new Error(message);


  if (!number) throw error(inValidArg);
  if (arguments.length > 1) throw error(inValidArg);
  if (isNaN(number)) throw error(inValidArg);

  let numberArray = [];
  while (number) {
    let digit = number % 10;
    numberArray.push(digit);
    number = (number - digit) / 10;
  }

  numberArray.reverse();

  return numberArray;
};

generateDigitArray(1234567890);

module.exports = generateDigitArray;