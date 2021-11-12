const isValidAmount = (amount, credit, cash) => {
  const isValid = amount <= credit + cash;
  if (!isValid) throw "You Dont Have Enough Credit";

  return true;
};

module.exports = {
  isValidAmount,
};
