const express = require("express");
const app = express();
const connectDb = require("./db/connect");
require("dotenv").config();
const not_found = require("./middleware/not-found");

const port = process.env.PORT || 5000;

// Middleware

// get all routes ->routes Middleware

// error paths
app.use(not_found);
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
