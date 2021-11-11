// Taking care of "events" module as seen by organizer

const express = require("express");
const auth = require("../middleware/auth");

const {
  getAllEvents,
  getEventById,
  removeEventById,
  patchEventById,
} = require("../controllers/organizer");

const router = express.Router();

router.route("/").get(auth, getAllEvents);

router.route("/event").get(auth, getEventById);

router.route("/modify-event").patch(auth, patchEventById);

router.route("/remove-event").post(auth, removeEventById);

module.exports = router;
