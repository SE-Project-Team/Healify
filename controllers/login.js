const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { UnauthenticatedError, BadRequestError } = require("../errors");
require("dotenv").config();

// post controller for login -> req contains token!!?
const postLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please Enter UserName and Password");
  }

  const user = await User.findOne({ username: username });
  if (!user) {
    throw new UnauthenticatedError("Invalid username");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw new UnauthenticatedError("Invalid password");
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
  res.status(StatusCodes.OK).json({ success: true, data: { token: token } });
};

module.exports = { postLogin };
