const mongoose = require("mongoose");
require("dotenv").config();

const url =
  "mongodb+srv://omriza5:amosh100@cluster0.dql37.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = () => {
  mongoose.connect(`${process.env.DATABASE_URL}`, {}, (err, client) => {
    if (err) return console.log("Connection Failed...", err);

    console.log("Connected to MongoDB Atlas...");
  });
};
// module.exports = () => {
//   mongoose.connect(url, {}, (err, client) => {
//     if (err) return console.log("Connection Failed...", err);

//     console.log("Connected to MongoDB Atlas...");
//   });
// };
