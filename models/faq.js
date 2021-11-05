const mongoose = require("mongoose");

const faq = new mongoose.Schema({
  event: {
    type: mongoose.Schema.ObjectId,
    ref: "event",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  },
});

module.exports = mongoose.model("faq", faq);
