const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware

// get all routes ->routes Middleware

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
