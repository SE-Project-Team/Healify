const asyncWrapper = (fn) => {
  // assumption is that fn has these parameters
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // send to error handling middleware
      next(error);
    }
  };
};

module.exports = asyncWrapper;
