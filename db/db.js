const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose.connect(`${process.env.DATABASE_URL}`, {}, (err, client) => {
    if (err) return console.log("Connection Failed...", err);

    console.log("Connected to MongoDB Atlas...");
  });
};
