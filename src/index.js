require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.itrdu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});

mongoose.connection.on("errot", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Welcome to Pakistan");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
