const mongoose = require("mongoose");
const { userSchema } = require("./user");

const transactionSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now() },
  amount: Number,
  originUser: userSchema,
  destUser: userSchema,
});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = {
  Transaction,
  transactionSchema,
};
