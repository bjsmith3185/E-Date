const router = require("express").Router();

// Groupss routes


// Get all groups route
router.route("/")   
  .get((req, res) => {
      console.log("in the get groups route");
    res.json({"request":"you requested all groups"});
  });


  // Add group route
  router.route("/")
  .post((req, res) => {
      console.log("this is the group we want to add");
      console.log(req.body);

    res.send({"response": req.body})
  });




  module.exports = router;