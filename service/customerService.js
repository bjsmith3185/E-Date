
// // Access to the db model
// var db = require("../model");

const Contact = require("./model");


async function addContact(contactObj) {
    // create the contact
    const contact = await Contact.create(contactObj);
    return contact;
  }



