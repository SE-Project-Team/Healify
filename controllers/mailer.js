const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const sendmail = require("sendmail")();

const sendAnEmail = async (req, res) => {
  console.log("this is a test");
  console.log("are we here");
  const result = await sendmail(
    {
      from: "cs19b046@iittp.ac.in",
      to: "githin.george2001@gmail.com",
      subject: "test sendmail",
      html: "Mail of test sendmail ",
    },
    function (err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    }
  );
  res.status(200).json(result);
};

module.exports = { sendAnEmail };
