// Taking care of "events" module as seen by user

const express = require("express");
const auth = require("../middleware/auth");

const {
  getFavourites,
  addToFavourites,
  getAllEvents,
  getEventById,
  createReview,
} = require("../controllers/userEvents");

const router = express.Router();

// Add events to marked or view marked events
router.route("/").get(auth, getAllEvents);
router
  .route("/favourites")
  .get(auth, getFavourites)
  .post(auth, addToFavourites);

// Get specific event by id->query parameter
router.route("/event").get(auth, getEventById);

router.route("/reviews").post(auth, createReview);

module.exports = router;
