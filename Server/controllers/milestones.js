const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

// Post Methods
const createNewMilestone = async (req, res) => {
  const { _id, title, description, targetDate } = req.body;
  if (!title || !description) {
    throw new BadRequestError("Milestone must have title and description");
  }

  const newMilestone = { title, description, targetDate };
  //   push adds new item to arrayProp milestones
  await User.findByIdAndUpdate(_id, { $push: { milestones: newMilestone } });

  res.status(StatusCodes.OK).send("New Milestone Created");
};

// Patch Methods
const editMilestone = async (req, res) => {
  const { _id, milestoneId, title, description, targetDate, completed } =
    req.body;
  if (!title || !description) {
    throw new BadRequestError("Milestone must have title and description");
  }

  //   find a user based on first parameter, then set the below properties
  await User.findOneAndUpdate(
    { _id: _id, milestones: { $elemMatch: { _id: milestoneId } } },
    {
      $set: {
        "milestones.$.title": title,
        "milestones.$.description": description,
        "milestones.$.targetDate": targetDate,
        "milestones.$.completed": completed,
      },
    }
  ).catch((err) => {
    throw err;
    console.log("error is:\n", err);
  });

  res.status(StatusCodes.OK).send("Milestone Edited");
};

// get Methods
const getActiveMilestones = async (req, res) => {
  const { id } = req.query;
  const { milestones } = await User.findOne({ _id: id });
  const activeMilestones = await milestones.filter((each) => {
    return each.completed === "false";
  });
  console.log(activeMilestones);
  res.status(StatusCodes.OK).json(activeMilestones);
};

const getAllMilestones = async (req, res) => {
  const { id } = req.query;
  const { milestones } = await User.findOne({ _id: id });
  res.status(StatusCodes.OK).json(milestones);
};

const getMilestone = async (req, res) => {
  const { id } = req.query;
  const { milestones } = await User.findOne({ _id: id });
  const activeMilestones = await milestones.filter((each) => {
    return each._id === id;
  });
  res.status(StatusCodes.OK).json(activeMilestones[0]);
};

module.exports = {
  createNewMilestone,
  editMilestone,
  getAllMilestones,
  getActiveMilestones,
  getMilestone,
};
