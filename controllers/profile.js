const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const User = require("../models/user");

const getProfile = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findOne({ _id });
  const profile = {
    AgeGroup: user[agegroup],
    Gender: user[gender],
    Hobbies: user[hobbies],
  };
  return res
    .status(StatusCodes.OK)
    .json({ status: "success", data: { profile } });
};

const postProfile = async (req, res) => {
  const { AgeGroup, Gender, Hobbies } = req.body;
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, {
    $set: { [agegroup]: AgeGroup, [gender]: Gender, [hobbies]: Hobbies },
  });

  res
    .status(StatusCodes.OK)
    .json({ status: "success", data: { score, remarks, keys } });
};
module.exports = { postProfile, getProfile };
