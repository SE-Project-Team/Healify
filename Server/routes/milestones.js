const express = require("express");

// router middleware
const router = express.Router();

router.route("/").get(() => {});

module.exports = router;
