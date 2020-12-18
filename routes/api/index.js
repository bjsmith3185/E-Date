const router = require("express").Router();
const contactRouter = require("./contactsRouter");
const groupRouter = require("./groupsRouter");

// Route used to CRUD contacts
router.use("/contacts", contactRouter);

// Route used to CRUD groups
router.use("/groups", groupRouter);


// Future routes, each part of the project should have a specific route








module.exports = router;










