// creating a basic server to checks if things are working fine

require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on the PORT : " + PORT);
});
