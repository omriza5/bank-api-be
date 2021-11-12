const { Transaction } = require("../models/transaction");
const { User } = require("../models/user");

const addTransaction = async (
  transactionName,
  amount,
  originUser,
  destUser
) => {
  const transaction = new Transaction({
    name: transactionName,
    amount: amount,
    originUser: new User(originUser),
    destUser: new User(destUser),
  });

  return await transaction.save();
};

module.exports = {
  addTransaction,
};
