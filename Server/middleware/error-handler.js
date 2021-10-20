const { CustomErrorAPI } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomErrorAPI) {
    return res.status(err.StatusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("something went wrong!! Please Try Again");
};

module.exports = errorHandlerMiddleware;
