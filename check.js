const check = (number) => {
  const inValidArg = "check() requires 1 argument: the number to be checked";
  const error = (message) => new Error(message);


  if (!number) throw error(inValidArg);

  if (arguments.length > 1) throw error(inValidArg);

  return;
};

module.exports = check;