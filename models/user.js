const mongoose = require("mongoose");
const validator = require("validator");

const keywordSchema = require("./keywordSchema");
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

const milestoneSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required"],
  },
  subtasks: {
    type: [
      {
        content: String,
        completed: Boolean,
      },
    ],
    default: [],
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
    },
    email: {
      type: String,
      required: [true, "email is required"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide valid email",
      },
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
      type: [milestoneSchema],
      default: [],
    },
    keywords: {
      type: keywordSchema,
      default: {},
    },
    favouriteEvents: [{ type: mongoose.Schema.ObjectId, ref: "event" }],
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
