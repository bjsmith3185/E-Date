
// // Access to the db model
// var db = require("../model");

const Contact = require("./model");

module.exports = function (app) {
  //Add Contact
  async function addContact(contactObj) {
    // create the contact
    const contact = await Contact.createContact(contactObj);
    return contact;
  }
  //Get Contact By ID
  async function getContact(id) {
    const contact = await Contact.getContact(id);
    return contact;
  }
  //Get All Contacts
  async function getAllContacts() {
    const contacts = await Contact.getAllContacts();
    return contacts;
  }
  //Delete Contact
  async function deleteContact(id) {
    const contact = await Contact.removeContact(id);
    return contact;
  }
  //Edit Contact
  async function editContact(id, body) {
    //research this method
    const contact = await Contact.createContact(id);
    return contact;
  }
};