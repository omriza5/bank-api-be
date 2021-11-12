const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  passportId: { type: String, required: true },
  name: String,
  cash: { type: Number, default: 0 },
  credit: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
});

const User = mongoose.model("user", userSchema);

module.exports = { User, userSchema };
