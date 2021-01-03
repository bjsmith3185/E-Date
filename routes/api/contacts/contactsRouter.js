const router = require("express").Router();
//const contactDb = require("../../../service/contacts/dbConnection/contactDb");
const contactDb = require("../../../service/contacts/dbConnection/contactDb")

// Contacts routes
// the path for this module: http://localhost:3001/api/contacts
// a parameter for 'id' is required for get/put/delete
// a request body in json is required for post/update


// Get all contacts route
// http://localhost:3001/api/contacts/
router.route("/")
  .get((req, res) => {
    console.log("in the get contacts route");
    // here we call the file that will access the Contacts table
    // this is found in service/contacts/dbConnection/contactDb.js
    // above we required the file and saved it as the constant contactDb
    const contactList = contactDb.getAllContacts();
    console.log("This is the list of contacts returned from the database");
    console.log(contactList);
    res.send(contactList);

    // res.json({ "request": "you requested all contacts" });
  });


// Add contact route
router.route("/")
  .post((req, res) => {
    console.log("this is the contact we want to add");
    console.log(req.body);
    // inport service/contacts/dbConnections/contactDB.js
    // this next line will put the contact into the database
    const contact = contactDb.addContact(req.body);

    console.log("contact response from database");
    console.log(contact);

    // return the contact from the database to the front end
    res.send(contact);
  });

// Get contact by ID
router.route("/:id")
  .get((req, res) => {
    console.log("in the get contact by ID route" + req.params.id);
    res.json({ "request": "you requested contact by id: " + req.params.id });
  });

// Update Contact by ID
router.route("/:id")
  .put((req, res) => {
    console.log("updating contact with id: " + req.params.id);
    res.send("you updated contact with id: " + req.params.id);
  })

// Delete Contact by ID
router.route("/:id")
  .delete((req, res) => {
    console.log("deleting contact with id: " + req.params.id);
    res.send("you deleted contact with id: " + req.params.id);
  })

module.exports = router;
