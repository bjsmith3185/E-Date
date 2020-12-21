const router = require("express").Router();
const eventsRouter = require("./eventsRouter");

// Route used to CRUD calendar events
router.use("/events", eventsRouter);

module.exports = router;