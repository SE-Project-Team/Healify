const { StatusCodes } = require("http-status-codes");

const not_found = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send("url does not exist");
};

module.exports = not_found;
