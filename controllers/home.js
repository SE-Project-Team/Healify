const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError } = require("../errors");
require("dotenv").config();

const checkUser = async (req, res) => {
  let username, role;
  if (req.user) {
    console.log(req.user);
    username = req.user.username;
    role = req.user.role;
  } else if (req.organizer) {
    console.log(req.organizer);

    username = req.organizer.username;
    role = req.organizer.role;
  }
  if (username) {
    return res
      .status(StatusCodes.OK)
      .json({ success: true, data: { username, role } });
  }
  throw new UnauthenticatedError("Invalid Token or No such User Exists");
};

module.exports = { checkUser };
