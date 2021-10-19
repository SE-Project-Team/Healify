const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxlength: 24,
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
});

module.exports = mongoose.model("user", user);
