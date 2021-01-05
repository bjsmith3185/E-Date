
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
      console.log(`New user ${newUser.name}, with id ${newUser.id} has been created.`);
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
    const contact = db.Contact.findOne(
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

  // // Edit Contact
  // editContact: async function(id, body) {
  // //async function editContact(id, {body}) {

  //   // passing in {body} in update method
  //   // not passing id in update method because we're not updating the id
  //   const updatedContact = db.Contact.update({ body }, {
  //     where: { id: id }
  //   });
  //   return updatedContact;
  // },

  // // Delete Contact
  // deleteContact: async function(id) {
  // //async function deleteContact(id) {

  //   // deleting all contact info where id matches req.params.id
  //   // so do not have to pass anything in destroy method
  //   const deletedContact = await Contact.destroy({
  //     where: { id: id }
  //   });
  //   return deletedContact;
  // }


};













  // // Edit Contact
  //   // We'll have to play around with this... 
  //   // I'm not sure we have to pass in the id - ie (id) and (id, {body})
  //   async function editContact(id, { body }) {
  //     // research this method
  //     const contact = await Contact.update(id, { body }, {
  //       where: { id: req.params.id }
  //     });
  //     return contact;
  //   }
  //   // Delete Contact
  //   async function deleteContact(id, { body }) {
  //     const contact = await Contact.destroy(id, { body }, {
  //       where: { id: req.params.id }
  //     });
  //     return contact;
  //   }
  // };