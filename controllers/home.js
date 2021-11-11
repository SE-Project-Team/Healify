const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError } = require("../errors");
require("dotenv").config();

const checkUser = async (req, res) => {
  let username;
  if (req.user) {
    username = req.user.username;
  } else if (req.organizer) {
    username = req.organizer.username;
  }
  if (username) {
    return res
      .status(StatusCodes.OK)
      .json({ success: true, data: { username } });
  }
  throw new UnauthenticatedError("Invalid Token or No such User Exists");
};

module.exports = { checkUser };
