const asyncWrapper = require("../middleware/async_wrapper");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { UnauthenticatedError } = require("../errors");
require("dotenv").config();

// post controller for login -> req contains token!!?
const postLogin = async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ username: userName });
  if (!user) {
    //   throw custom error
    new UnauthenticatedError("Invalid username");
  }

  const passwordCompare = bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    //   throw custom error
    new UnauthenticatedError("Invalid password");
  }

  //   create token sign with payload,secret,expiration time
  const token = jwt.sign(
    {
      username: user.username,
      _id: user._id.toString(),
    },
    process.env.JWT_SECRET,
    { expiresIn: "2d" }
  );
  res.status(StatusCodes.OK).json({ token: token, _id: user._id.toString() });
};

module.exports = { postLogin };
