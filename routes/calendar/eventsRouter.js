const router = require("express").Router();
const eventDb = require("../../service/events/dbConnection/eventDb");

// Events routes

// Get All Events route
router.route("/")
    .get((req, res) => {
        console.log("in the get events route");
        res.json({ "request": "you requested all events" });

        const allEvents = eventDb.getAllEvents();
        console.log(allEvents);

        res.send(allEvents);
    });
// Add Event route
router.route("/new")
    .get((req, res) => {
        console.log("this is the event we want to add");
        console.log(req.body);
        res.send({ "response": req.body });

        const newEvent = eventDb.addEvent();
        console.log(newEvent);

        res.send(newEvent);
    });
// Get Event by ID
router.route("/:id")
    .get((req, res) => {
        console.log("in the get event by ID route" + req.params.id);
        res.json({ "request": "you requested event by id: " + req.params.id });

        const event  = eventDb.getEvent();
        console.log(event);

        res.send(event);
    });
// Update Event by ID
router.route("/:id")
    .get((req, res) => {
        console.log("updating event with id: " + req.params.id);
        res.send("you updated contact with id: " + req.params.id);

        const updatedEvent = eventDb.editEvent();
        console.log(updatedEvent);

        res.send(updatedEvent);
    });
// Delete Event by ID
router.route("/:id")
    .get((req, res) => {
        console.log("deleting event with id: " + req.params.id);
        res.send("you deleted event with id: " + req.params.id);

        const deletedEvent = eventDb.deleteEvent();
        console.log(deletedEvent);

        res.send(deletedEvent);
    });

module.exports = router;