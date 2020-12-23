
// // Access to the db model
// var db = require("../model");

const Contact = require("../../../model");

module.exports = function (app) {
  // Get All Contacts
  async function getAllContacts() {
    const contacts = await Contact.getAllContacts();
    return contacts;
  }
  //Add Contact
  async function addContact(contactObj) {
    const contact = await Contact.createContact(contactObj);
    return contact;
  }
  // Get Contact By ID
  async function getContact(id) {
    const contact = await Contact.getContact(id);
    return contact;
  }
  // Edit Contact
  async function editContact(id, { body }) {
    // research this method
    const contact = await Contact.create(id, { body }, {
      where: { id: req.body.id }
    });
    return contact;
  }
  // Delete Contact
  async function deleteContact(id, { body }) {
    const contact = await Contact.destroy(id, { body }, {
      where: { id: req.body.id }
    });
    return contact;
  }
};