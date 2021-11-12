const mongoose = require("mongoose");

// const connectionURL = "mongodb://127.0.0.1:27017";
const connectionURL =
  "mongodb+srv://omriza5:amosh100@cluster0.dql37.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const databaseName = "omriBank";

module.exports = () => {
  mongoose.connect(`${connectionURL}`, {}, (err, client) => {
    if (err) return console.log("Connection Failed...", err);

    console.log("Connected to MongoDB Atlas...");
  });
};

// /${databaseName}
