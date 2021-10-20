const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startswith("Bearer ")) {
    //throw error to be taken care of by express-async
    // unauthorized error
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
    //   unauthorized error
  }
};

module.exports = authenticationMiddleware;
