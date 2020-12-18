const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const healthCheckRoute = require("./healthCheck");

// API Routes
router.use("/api", apiRoutes);

router.use("/", healthCheckRoute);




// If no API routes are hit, send the React app
router.use(function(req, res) {
    // res.sendFile(path.join(__dirname, "../client/build/index.html"));
    res.json({"Response":"Incorrect Url"});
  });
  
  module.exports = router;

