const router = require("express").Router();

// Groupss routes
// the path for this module: http://localhost:3001/api/groups/populated
// a parameter for 'id' is required for get/put/delete
// a request body in json is required for post/update


// Get all populated groups route
router.route("/")
  .get((req, res) => {
    console.log("in the get populated groups route");
    res.json({ "request": "you requested all populated groups" });
  });


// Add populated group route
router.route("/")
  .post((req, res) => {
    console.log("this is the populated group we want to add");
    console.log(req.body);

    res.send({ "response": req.body })
  });

// Get populated group by ID
router.route("/:id")
  .get((req, res) => {
    console.log("in the get populated group by ID route");
    res.json({ "request": "you requested populated group by id: " + req.params.id });
  });

// Update populated group by id
router.route("/:id")
  .put((req, res) => {
    console.log("updating populated group with id: " + req.params.id);
    console.log(req.params.body);
    res.send("you updated populated group with id: " + req.params.id);
  })

// Delete populated group by id
router.route("/:id")
  .delete((req, res) => {
    console.log("deleting populated group with id: " + req.params.id);
    res.send("you deleted populated group with id: " + req.params.id);
  })




module.exports = router;