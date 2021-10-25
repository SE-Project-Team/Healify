const express = require("express");
const { postLogin } = require("../controllers/login");
// router middleware
const router = express.Router();

router.route("/").post(postLogin);

module.exports = router;
