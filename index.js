const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db.js");
const users = require("./routes/users");
const transactions = require("./routes/transactions");

connectToDb();

app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/transactions", transactions);

/** Web Server */
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
