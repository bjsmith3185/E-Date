const router = require("express").Router();
const contactDb = require("../../service/contacts/dbConnection/contactDb");

// Contacts routes
// the path for this module: http://localhost:3001/api/contacts
// a parameter for 'id' is required for get/put/delete
// a request body in json is required for post/update

// Get all contacts route
// http://localhost:3001/api/contacts/
router.route("/").get((req, res) => {
  console.log("in the get contacts route");
  // here we call the file that will access the Contacts table
  // this is found in service/contacts/dbConnection/contactDb.js

  contactDb
    .getAllContacts()
    .then((listOfContacts) => {
      // console.log("===== List of all contacts ========");
      // console.log(listOfContacts);
      res.send(listOfContacts);
    })
    .catch((e) => {
      console.log("error happened getting all contacts");
      console.log(e);
      res.send(e);
    });
});


// Add contact route
router.route("/").post((req, res) => {
  console.log("this is the contact we want to add");
  console.log(req.body);

  contactDb
    .addContact(req.body)
    .then((newContact) => {
      console.log("===== A new contact was created with Id: " + newContact.id);
      console.log(newContact);
      res.send(newContact);
    })
    .catch((e) => {
      console.log("error happened");
      console.log(e);
      res.send(e);
    });
});

// Get contact by ID
router.route("/:id").get((req, res) => {
  // call get contact by id function in contactDb file
  console.log("in the get contact by ID route to find contactID: " + req.params.id);
  contactDb.getContact(req.params.id)
  .then((contact) => {
    console.log("===== this is the contact by Id: " + contact.id);
    //console.log(contact);
    res.send(contact);
  })
  .catch((e) => {
    console.log("error happened");
    console.log(e);
    res.send(e);
  });
});

// Update Contact by ID
// Send a body with the values you want to update in json format
// ie:  { " firstName" : "john" }  the new contact will be updated to john
router.route("/:id").put((req, res) => {
  console.log("updating contact with id: " + req.params.id);
  console.log("updating contact with id: " + req.body);
  console.log("this is the body to update");
  console.log(req.body);
  contactDb.updateContact(req.params.id, req.body)
  .then((contact) => {
   // console.log("===== this is the contact by Id: " + contact.id);
    console.log(contact);
    res.json({"status" : contact});
  })
  .catch((e) => {
    console.log("error happened");
    console.log(e);
    res.send(e);
  });




  // const updatedContact = contactDb.editContact();
  // console.log("updating contact with id: " + req.params.id);
  // res.send("you updated contact with id: " + req.params.id);
  // res.send(updatedContact);
});

// Delete Contact by ID
router.route("/:id").delete((req, res) => {
  console.log("deleting contact with id: " + req.params.id);
  contactDb.deleteContact(req.params.id)
  .then((contact) => {
    console.log(contact);
    res.json({"status" : contact});
  })
  .catch((e) => {
    console.log("error happened");
    console.log(e);
    res.send(e);
  });
});

module.exports = router;
