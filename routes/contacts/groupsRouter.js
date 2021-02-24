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
   // res.json({ "request": "you requested all groups" });

    groupDb.getAllGroups()
    .then(dbresults => {
      console.log(dbresults);
      res.json(dbresults)
    })
    .catch(e => {
      console.log("error getting all groups");
      console.log(e)
      res.json({"status":e});
    })

  });


// Add group route
router.route("/")
  .post((req, res) => {
    console.log("this is the group we want to add");
    console.log(req.body);
   // res.send({ "response": req.body })

   groupDb.addGroup(req.body)
   .then(dbresults => {
    console.log("response from adding a group");
    console.log(dbresults);
    res.json(dbresults)
   })
   .catch(e => {
    console.log(" Error response from adding a group");
    console.log(dbresults);
    res.json({"status":e});
   })
  
  });

// Get group by ID
router.route("/:id")
  .get((req, res) => {
    console.log("in the get group by ID route");

    groupDb.getGroupById()
    .then(dbresults => {
      console.log("response from get group by ID");
      console.log(dbresults);
      res.json(dbresults)
    })
    .catch(e => {
      console.log("Error response from get group by ID");
      console.log(dbresults);
      res.json({"status":e});
    })
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