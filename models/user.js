const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  score: {
    type: Number,
    required: [true, "Score is Required"],
  },
  remarks: {
    type: String,
    required: [true, "Remarks Not Mentioned"],
  },
});

const milestone = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required"],
  },
  description: {
    type: String,
    required: [true, "Description is Required"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  targetDate: {
    type: Date,
    default: Date.now,
  },
});

const user = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      maxlength: 24,
      immutable: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [5, "password length should be atleast 8"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    quizCat1: {
      type: [scoreSchema],
      default: [],
    },
    quizCat2: {
      type: [scoreSchema],
      default: [],
    },
    quizCat3: {
      type: [scoreSchema],
      default: [],
    },
    quizCat4: {
      type: [scoreSchema],
      default: [],
    },
    milestones: {
      type: [milestone],
      default: [],
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);

module.exports = mongoose.model("user", user);
