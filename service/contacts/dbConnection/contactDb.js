
const db = require("../../../model");


module.exports = {
  // Get All Contacts
  getAllContacts: function() {

 // async function getAllContacts() {
    db.Contact.findAll({})
    .then(contacts => {
      console.log(`Found ${contacts.length} matching records.`);
      return contacts;
    })
    .catch(e => {
      console.log("------------ an error occurred getting all contact ----------")
      console.log(e);
      return e;
    });

  },

  // Add Contact
  addContact: function(contactObj) {
  //async function addContact(contactObj) {
    // const newContact = db.Contact.create(contactObj);
    db.Contact.create(contactObj)
    .then(newUser => {
      console.log(`New user ${newUser.firstName}, with id ${newUser.id} has been created.`);
      console.log(newUser);
      return newUser;
    })
    .catch(e => {
      console.log("------------ an error occurred adding a contact ----------")
      console.log(e);
      return e;
    });
   // return "error creating new contact";
  },

  // Get Contact By ID
  getContact: function(id) {
 // async function getContact(id) {
    db.Contact.findOne(
      {id: id }
      )
      .then(contact => {
        console.log(`contact ${contact.name}, with id ${contact.id} has been retreived.`);
        return contact;
      })
      .catch(e => {
        console.log("------------ an error occurred getting a contact ----------")
        console.log(e);
        return e;
      });
  },

  // Update Contact
  updateContact: function(id, body) {
    db.Contact.findOne({
      id: id
    })
    .then(contact => {
      contact.updateAttributes(body)
      .then(updatedcontact => {
        console.log("the contact was updated");
        console.log(updatedcontact);
        return updatedcontact
      })
      .catch(e => {
        console.log("------------ an error occurred updating a contact ----------")
        console.log(e);
        return e;
      });
    })
    .catch(e => {
      console.log("------------ an error occurred getting a contact for updating ----------")
      console.log(e);
      return e;
    });

  },

  // Delete Contact
  deleteGroup: function(id) {
    db.Contact.destory({
      where: { id: id }
    })
    .then(deletedContact => {
      console.log(`Has it been deleted? 1 means yes, 0 means no: ${deletedContact}`);
      return deletedContact;
    });
  }
};


  