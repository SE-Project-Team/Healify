const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startswith("Bearer ")) {
    throw new UnauthenticatedError("No Token in Request");
  }

  // auth header = 'Bearer <Token>'
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token.process.env.JWT_SECRET);
    const { id, username, password } = decoded;
    // add user in request
    req.user = { id, username, password };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Invalid Token");
  }
};

module.exports = authenticationMiddleware;
