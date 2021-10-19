const express = require("express");

// router middleware
const router = express.Router();

router.route("/").post(() => {});

module.exports = router;
