const mongoose = require("mongoose");

const user = new mongoose.Schema({
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
    type: [
      {
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
      },
    ],
    default: [],
  },
  quizCat2: {
    type: [
      {
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
      },
    ],
    default: [],
  },
  quizCat3: {
    type: [
      {
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
      },
    ],
    default: [],
  },
  quizCat4: {
    type: [
      {
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
          enum: {
            values: ["Very Bad", "Bad", "Average", "Good", "Very Good"],
            message: "${VALUE} is wrong",
          },
        },
      },
    ],
    default: [],
  },
  milestones: {
    type: [
      {
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
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("user", user);
