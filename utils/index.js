const isValidAmount = (amount, credit, cash) => {
  const isValid = amount <= credit + cash;
  if (!isValid) throw "Doesnt Have Enough Credit";

  return true;
};

module.exports = {
  isValidAmount,
};
