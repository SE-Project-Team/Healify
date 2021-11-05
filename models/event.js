const mongoose = require("mongoose");

const announcement = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  content: {
    type: String,
  },
});

const event = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: [true, "Organizer Name is required"],
    },
    date: {
      type: Date,
      required: [true, "Date of event is required"],
    },
    platforms: {
      type: [String],
    },
    eventImage: {
      type: String,
    },
    announcements: [announcement],
    organizer: {
      type: mongoose.Schema.ObjectId,
      ref: "organization",
      required: true,
    },
    status: {
      type: String,
      enum: ["Completed", "Not Completed"],
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

event.virtual("review", {
  ref: "review",
  localField: "_id",
  foreignField: "review",
  justOne: false,
});

module.exports = mongoose.model("event", event);
