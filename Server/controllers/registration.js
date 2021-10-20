const asyncWrapper = require("../middleware/async_wrapper");
const createUser = asyncWrapper(async (req, res) => {});

module.exports = { createUser };
