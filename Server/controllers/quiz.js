const asyncWrapper = require("../middleware/async_wrapper");
const submitScore = asyncWrapper(async (req, res) => {});

module.exports = { submitScore };
