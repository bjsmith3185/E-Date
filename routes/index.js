const path = require("path");
const router = require("express").Router();
const healthCheckRoute = require("./healthCheck");
const contacts = require("./contacts/contactsRouter");
const groups = require("./contacts/groupsRouter");
const groupWithContacts = require("./contacts/groupWithContactRouter");
const calendar = require("./calendar/eventsRouter");

// API Routes

// Route for Contact CRUD
router.use("/api/contacts", contacts);
// Route for Group CRUD
router.use("/api/groups", groups);
// Route for GroupWithContact CRUD
router.use("/api/groupwithcontact", groupWithContacts);

// Route for Calendar CRUD
router.use("/api/calendar", calendar);

// Route for healthCheck
router.use("/", healthCheckRoute);




// If no API routes are hit, send the React app
router.use(function (req, res) {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
  res.json({ "Response": "Incorrect Url" });
});

module.exports = router;

