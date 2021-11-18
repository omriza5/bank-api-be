const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
  getUser,
} = require("../controller/users.controller");

/** Get all users */
router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getUsers());
  } catch (error) {
    res.status(400).send(error);
  }
});

/** Get user by id */
router.get("/:id", async (req, res) => {
  try {
    const user = await getUser(req.params.id);

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

/** Create user */
router.post("/", async (req, res) => {
  try {
    const user = await addUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

/** Update user credit */
router.put("/:passportId", async (req, res) => {
  if (req.body.credit < 0)
    return res.status(400).send("Invalid Credit Amount!");
  try {
    const user = await getUser(req.params.passportId);

    user.credit = req.body.credit;

    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
