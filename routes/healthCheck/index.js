const router = require("express").Router();


// Route used to confirm service is running
router.route("/healthcheck")   
  .get((req, res) => {
    console.log("in the healthcheck route");
    res.send("E-Date service is running");
  });



module.exports = router;