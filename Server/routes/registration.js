const express = require("express");
const { registerUser } = require("../controllers/registration");

// router middleware
const router = express.Router();

router.route("/").post(registerUser);

module.exports = router;
