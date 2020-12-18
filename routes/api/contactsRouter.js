const router = require("express").Router();

// Contacts routes


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




  module.exports = router;
