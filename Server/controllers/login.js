const asyncWrapper = require("../middleware/async_wrapper");
const authLogin = asyncWrapper(async (req, res) => {});

module.exports = { auth };
