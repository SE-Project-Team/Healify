const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const User = require("../models/user");

const getProfile = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findOne({ _id });

  if (!user) {
    throw new BadRequestError("No Such User");
  }
  const profile = {
    BirthDay: user.birthday,
    Gender: user.gender,
    Hobbies: user.hobbies,
  };

  return res
    .status(StatusCodes.OK)
    .json({ status: "success", data: { profile } });
};

const postProfile = async (req, res) => {
  const { BirthDay, Gender, Hobbies } = req.body;
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, {
    $set: { birthday: BirthDay, gender: Gender, hobbies: Hobbies },
  });
  res
    .status(StatusCodes.OK)
    .json({ status: "success", data: { BirthDay, Gender, Hobbies } });
};
module.exports = { postProfile, getProfile };
