const express = require("express");
const router = express.Router();
const { getUser } = require("../db/usersQueries");
const { addTransaction } = require("../db/transactionsQueries");
const { isValidAmount } = require("../utils");

const adminUserId = "302560099";

router.post("/deposit/:passportId", async (req, res) => {
  try {
    const user = await getUser(req.params.passportId);
    const userAdmin = await getUser(adminUserId);
    const transaction = await addTransaction(
      "Deposit",
      req.body.amount,
      userAdmin,
      user
    );

    user.cash += req.body.amount;

    await user.save();

    res.status(200).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/withdraw/:passportId", async (req, res) => {
  const amount = req.body.amount;

  if (amount <= 0) return res.status(400).send("Amount Must Be Greater Than 0");

  try {
    const user = await getUser(req.params.passportId);
    isValidAmount(amount, user.credit, user.cash);

    const transaction = await addTransaction(
      "Withdraw",
      req.body.amount,
      adminUserId,
      user._id
    );

    user.cash -= amount;
    await user.save();
    res.status(200).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/transfer", async (req, res) => {
  const originUserId = req.body.originUser;
  const destUserId = req.body.destUser;
  const amount = req.body.amount;
  try {
    const originUser = await getUser(originUserId);
    const destUser = await getUser(destUserId);

    isValidAmount(amount, originUser.credit, originUser.cash);

    originUser.cash -= amount;
    destUser.cash += amount;

    /** add transaction  */
    const transaction = await addTransaction(
      "Transfer",
      req.body.amount,
      originUser,
      destUser
    );
    await originUser.save();
    await destUser.save();

    res.status(200).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
