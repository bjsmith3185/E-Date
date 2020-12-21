const eventsRouter = require("./calendar/eventsRouter");

// Route used to CRUD calendar events
router.use("/events", eventsRouter);

module.exports = router;