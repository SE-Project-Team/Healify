const express = require("express");

const { postScore, getScore } = require("../controllers/quiz");

const router = express.Router();

router.route("/score").post(postScore);

router.route("/statistics").get(getScore);

module.exports = router;
