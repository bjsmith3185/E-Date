const router = require("express").Router();
const groupDb = require("../../service/contacts/dbConnection/groupDb");

// Groupss routes
// the path for this module: http://localhost:3001/api/groups
// a parameter for 'id' is required for get/put/delete
// a request body in json is required for post/update


// Get all groups route
router.route("/")
  .get((req, res) => {
    console.log("in the get groups route");
    res.json({ "request": "you requested all groups" });

    const allGroups = groupDb.getAllGroups();
    console.log(allGroups);

    res.send(allGroups)
  });


// Add group route
router.route("/")
  .post((req, res) => {
    console.log("this is the group we want to add");
    console.log(req.body);
    res.send({ "response": req.body })

    const newGroup = groupDb.addGroup();
    console.log(newGroup);

    res.send(newGroup)
  });

// Get group by ID
router.route("/:id")
  .get((req, res) => {
    console.log("in the get group by ID route");
    res.json({ "request": "you requested group by id: " + req.params.id });
  });

// Update group by id
router.route("/:id")
  .put((req, res) => {
    console.log("updating group with id: " + req.params.id);
    console.log(req.params.body);
    res.send("you updated group with id: " + req.params.id);

    const updatedGroup = groupDb.editGroup();
    console.log(updatedGroup);

    res.send(updatedGroup);
  })

// Delete group by id
router.route("/:id")
  .delete((req, res) => {
    console.log("deleting group with id: " + req.params.id);
    res.send("you deleted group with id: " + req.params.id);

    const deletedGroup = groupDb.deleteGroup();
    console.log(deletedGroup);

    res.send(deletedGroup);
  })


module.exports = router;