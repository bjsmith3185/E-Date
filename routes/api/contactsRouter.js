const router = require("express").Router();

// Contacts routes
// the path for this module: http://localhost:3001/api/contacts
// a parameter for 'id' is required for get/put/delete
// a request body in json is required for post/update


// Get all contacts route
router.route("/")   
  .get((req, res) => {
      console.log("in the get contacts route");
    res.json({"request":"you requested all contacts"});
  });


  // Add contact route
  router.route("/")
  .post((req, res) => {
      console.log("this is the contact we want to add");
      console.log(req.body);

    res.send({"response": req.body})
  });

  // Get contact by ID
  router.route("/:id")   
  .get((req, res) => {
      console.log("in the get contact by ID route");
    res.json({"request":"you requested contact by id: " + req.params.id});
  });

  // Update Contact by id
  router.route("/:id")
  .put((req,res) => {
    console.log("updating contact with id: " + req.params.id);
    res.send("you updated contact with id: " + req.params.id);
  })

    // Delete Contact by id
    router.route("/:id")
    .delete((req,res) => {
      console.log("deleting contact with id: " + req.params.id);
      res.send("you deleted contact with id: " + req.params.id);
    })

  module.exports = router;
