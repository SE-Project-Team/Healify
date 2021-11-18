const express = require("express");
const auth = require("../middleware/auth");

const { sendAnEmail } = require("../controllers/mailer");

const router = express.Router();

router.route("/").post(auth, sendAnEmail);

module.exports = router;
