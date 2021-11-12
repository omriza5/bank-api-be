const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "omriBank";

module.exports = () => {
  mongoose.connect(`${connectionURL}/${databaseName}`, {}, (err, client) => {
    if (err) return console.log("Connection Failed...", err);

    console.log("Connected to MongoDB...");
  });
};
