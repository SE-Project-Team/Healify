const mongoose = require("mongoose");

const review = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
    event: {
      type: mongoose.Schema.ObjectId,
      ref: "event",
      required: true,
    },
    content: {
      type: String,
      maxlength: 10000,
    },
    stars: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
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

module.exports = mongoose.model("review", review);
