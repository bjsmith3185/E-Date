const router = require("express").Router();

// Events routes

// Get All Events route
router.route("/")
    .get((req, res) => {
        console.log("in the get events route");
        res.json({ "request": "you requested all events" });
    });

// Add Event route
router.route("/new")
    .get((req, res) => {
        console.log("this is the event we want to add");
        console.log(req.body);
        res.send({ "response": req.body });
    });

// Get Event by ID
router.route("/:id")
    .get((req, res) => {
        console.log("in the get event by ID route" + req.params.id);
        res.json({ "request": "you requested event by id: " + req.params.id });
    });

// Update Event by ID
router.route("/:id")
    .get((req, res) => {
        console.log("updating event with id: " + req.params.id);
        res.send("you updated contact with id: " + req.params.id);
    });

// Delete Event by ID
router.route("/:id")
    .get((req, res) => {
        console.log("deleting event with id: " + req.params.id);
        res.send("you deleted event with id: " + req.params.id);
    });

module.exports = router;