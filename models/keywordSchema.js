const mongoose = require("mongoose");

const keywordSchema = new mongoose.Schema({
  keyword1: {
    type: Number,
    default: 0,
  },
});

module.exports = keywordSchema;
