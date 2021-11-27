const express = require("express");
const auth = require("../middleware/auth");

const {
  sendAnEmail,
  addContact,
  removeContact,
  getAllContacts,
} = require("../controllers/mailer");

const router = express.Router();

router.route("/").post(auth, sendAnEmail);

router.route("/remove-contact").post(auth, removeContact);

router.route("/add-contact").post(auth, addContact);

router.route("/get-all-contacts").get(auth, getAllContacts);

module.exports = router;
