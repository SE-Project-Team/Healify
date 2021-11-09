// Taking care of "events" module as seen by user

const express = require("express");
const auth = require("../middleware/auth");

const {
  getAllEvents,
  getEventById,
  removeEventById,
} = require("../controllers/organizer");

const router = express.Router();

// Add events to marked or view marked events
router.route("/").get(auth, getAllEvents);

// Get specific event by id->query parameter
router.route("/event").get(auth, getEventById);

router.route("/remove-event").post(auth, removeEventById);

// Questions/Faq
router.route("/faq").post();

router.route("/reviewevent").post();

module.exports = router;
