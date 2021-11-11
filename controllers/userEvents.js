const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError, BadRequestError } = require("../errors");

// models required
const Event = require("../models/event");
const User = require("../models/user");

const getFavourites = async (req, res) => {
  const { _id } = req.user;
  const favEvents = await User.findById(_id).populate("favouriteEvents");
  console.log(favEvents);

  if (!favEvents) {
    throw new BadRequestError("There Are No Favourite Events");
  }
  res.status(200).json({ success: "true", data: favEvents });
};

const addToFavourites = async (req, res) => {
  const { _id, eventId } = req.body;

  const event = await Event.findById(eventId);
  console.log("event is ", event);
  if (!event) {
    throw new BadRequestError("No Such Event");
  }
  const eventAddedToFavourites = await User.findByIdAndUpdate(_id, {
    $push: { favouriteEvents: eventId },
  });

  console.log(eventAddedToFavourites);
  if (!eventAddedToFavourites) {
    throw new BadRequestError("There Was Some Error");
  }

  //   Return on a test basis
  res.status(200).json({ success: "true", data: favEvents });
};

const getAllEvents = async (req, res) => {
  const allEvents = await Event.find({});
  console.log(allEvents);
  res.status(200).json({ success: "true", data: allEvents });
};

const getEventById = async (req, res) => {
  const { _id } = req.query;
  const event = await Event.findById(_id);
  console.log(event);
  if (!event) {
    throw new BadRequestError("There Exists No Such Event. Please Check Again");
  }
  res.status(200).json({ success: "true", data: event });
};
module.exports = { getFavourites, addToFavourites, getAllEvents, getEventById };
