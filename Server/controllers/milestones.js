const asyncWrapper = require("../middleware/async_wrapper");
const createNewMilestone = asyncWrapper(async (req, res) => {});

module.exports = { createNewMilestone };
