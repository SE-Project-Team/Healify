const express = require("express");
const auth = require("../middleware/auth");

const { postProfile, getProfile } = require("../controllers/profile");

const router = express.Router();

router.route("/").get(auth, getProfile);

router.route("/edit").post(auth, postProfile);

module.exports = router;
