const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const sendmail = require("sendmail")();

const sendAnEmail = async (req, res) => {
  // console.log("this is a test");
  // console.log("are we here");
  // const result = await sendmail(
  //   {
  //     from: "cs19b046@iittp.ac.in",
  //     to: "githin.george2001@gmail.com",
  //     subject: "test sendmail",
  //     html: "Mail of test sendmail ",
  //   },
  //   function (err, reply) {
  //     console.log(err && err.stack);
  //     console.dir(reply);
  //   }
  // );
  // res.status(200).json(result);
};

const addContact = async (req, res) => {
  const { _id } = req.user;

  console.log("Am i Here");
  console.log(req.body);
  const { friends } = await User.findByIdAndUpdate(_id, {
    $push: { friends: req.body.user },
  });

  if (!friends) {
    throw new BadRequestError("Something went wrong..!! Bad Request");
  }
  res.status(200).json({ success: "true", data: friends });
};

const removeContact = async (req, res) => {
  const { _id } = req.user;
  console.log("deleting");
  const { friends } = await User.findByIdAndUpdate(_id, {
    $pull: { friends: { _id: req.body.id } },
  });

  if (!friends) {
    throw new BadRequestError("Something went wrong..!! Bad Request");
  }
  res.status(200).json({ success: "true", data: friends });
};

const getAllContacts = async (req, res) => {
  const { _id } = req.user;

  const { friends } = await User.findById(_id);
  if (!friends) {
    throw new BadRequestError("Something went wrong..!! Bad Request");
  }
  console.log(friends);
  res.status(200).json({ success: "true", data: friends });
};
module.exports = { sendAnEmail, addContact, removeContact, getAllContacts };
