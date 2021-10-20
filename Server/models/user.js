const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name is required"],
    maxlength: 24,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "password length should be atleast 8"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
});

module.exports = mongoose.model("user", user);
