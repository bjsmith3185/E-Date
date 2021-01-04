const router = require("express").Router();
const contactRouter = require("../contacts/contactsRouter");
const groupRouter = require("../contacts/groupsRouter");
const groupWithContactRouter = require("../contacts/groupWithContactRouter");
const eventsRouter = require("./eventsRouter");

// Route used to CRUD contacts
router.use("/contacts", contactRouter);

// Route used to CRUD groups
router.use("/groups", groupRouter);

// Route used to CRUD groupWithContact
router.use("/groups/populated", groupWithContactRouter);

// Route used to CRUD events for Calendar
router.use("/calendar", eventsRouter);


module.exports = router;