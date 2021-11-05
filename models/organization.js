const mongoose = require("mongoose");
const validator = require("validator");

const organizer = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Organizer Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [5, "password length should be atleast 5"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
});

// Virtual Field containing all events ->

organizer.virtual("events", {
  ref: "event",
  localField: "_id",
  foreignField: "organizer",
  justOne: false,
});

module.exports = mongoose.model("organization", organizer);
