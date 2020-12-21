const router = require("express").Router();
const contactRouter = require("./contactsRouter");
const groupRouter = require("./groupsRouter");
const eventsRouter = require("./calendar/eventsRouter");


// Route used to CRUD contacts
router.use("/contacts", contactRouter);

// Route used to CRUD groups
router.use("/groups", groupRouter);

// Route used to CRUD events for calendar
router.use("/events", eventsRouter);

module.exports = router;