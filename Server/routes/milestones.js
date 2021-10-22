const express = require("express");
const auth = require("../middleware/auth");

const {
  createNewMilestone,
  editMilestone,
  getAllMilestones,
  getActiveMilestones,
  getMilestone,
} = require("../controllers/milestones");

const router = express.Router();

router.route("/").get(auth, getActiveMilestones);

router.route("/timeline").get(auth, getAllMilestones);

router.route("/create").post(auth, createNewMilestone);

router.route("/edit").patch(auth, editMilestone);

// Probably Not Gonna Use in this Release
router.route("/milestone").get(auth, getMilestone);

module.exports = router;
