const { User } = require("../models/user");

const getUsers = async () => {
  const users = await User.find();
  return users;
};

const getUser = async (userId) => {
  const user = await User.findOne({ _id: userId });

  if (!user) throw "User Not Found!";

  return user;
};
const addUser = async (userObj) => {
  /** check if user exist before adding it */

  const user = await User.findOne({ passportId: userObj.passportId });
  if (user) throw "User Already Exists";

  const newUser = new User({
    passportId: userObj.passportId,
    name: userObj.name,
    cash: userObj.cash,
    credit: userObj.credit,
    isActive: userObj.isActive,
  });

  return await newUser.save();
};

module.exports = {
  addUser,
  getUsers,
  getUser,
};
