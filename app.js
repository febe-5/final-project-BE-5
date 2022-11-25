const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();

const db = require("./app/config");
const router = require("./app/routes");
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db.then(() => {
  console.log("database connected");
}).catch((error) => {
  console.log(error.message);
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("server running on http://localhost:" + PORT + "/api");
});
