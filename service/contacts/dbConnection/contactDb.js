const db = require("../../../model");

module.exports = {
  // Get All Contacts
  getAllContacts: function () {
    return new Promise((resolve, reject) => {
      db.Contact.findAll({})
        .then((contacts) => {
          console.log(`Found ${contacts.length} matching records.`);
          resolve(contacts);
        })
        .catch((e) => {
          console.log(
            "------------ an error occurred getting all contact ----------"
          );
          console.log(e);
          reject(e);
        });
    });
  },

  // Add Contact
  addContact: function (contactObj) {
    return new Promise((resolve, reject) => {
      db.Contact.create(contactObj)
        .then((newUser) => {
          console.log(
            `New user ${newUser.firstName}, with id ${newUser.id} has been created.`
          );
          console.log(newUser);
          resolve(newUser);
        })
        .catch((e) => {
          console.log(
            "------------ an error occurred adding a contact ----------"
          );
          console.log(e);
          reject(e);
        });
    });
  },

  // Get Contact By ID
  getContact: function (id) {
    return new Promise((resolve, reject) => {
      db.Contact.findOne({
        where: {
          id: id,
        },
      })
        .then((contact) => {
          console.log(
            `contact ${contact.firstName}, with id ${contact.id} has been retreived.`
          );
          // console.log(contact)
          resolve(contact);
        })
        .catch((e) => {
          console.log(
            "------------ an error occurred getting a contact ----------"
          );
          console.log(e);
          reject(e);
        });
    });
  },

  // Update Contact
  updateContact: function (id, body) {
    return new Promise((resolve, reject) => {
      db.Contact.findOne({
        where: {
          id: id,
        },
      })
        .then((dbResponse) => {

          if (dbResponse.id) {
            db.Contact.update(body, { where: { id: id } })
              .then((result) => {
                console.log(
                  `contact with id ${dbResponse.id} has been updated.`
                );
                resolve(result);
              })
              .catch((e) => {
                console.log(
                  "------------ an error occurred updating contact id: " +
                    id +
                    " ----------"
                );
                console.log(e);
                reject(e);
              });
          } else {
            resolve("no contact found by id: " + id);
          }
        })
        .catch((e) => {
          // if an error occurs finding the id
          console.log(
            "------------ an error occurred, no contact by id: " +
              id +
              " ----------"
          );
          console.log(e);
          resolve(e);
        });
    });
  },

  // Delete Contact
  deleteContact: function (id) {
    return new Promise((resolve, reject) => {
      db.Contact.destroy({
        where: {
          id: id,
        },
      })
        .then((deletedContact) => {
          console.log(
            `Has it been deleted? 1 means yes, 0 means no: ${deletedContact}`
          );
          // console.log(contact)
          resolve(deletedContact);
        })
        .catch((e) => {
          console.log(
            "------------ an error occurred deleting contactId: " +
              id +
              " ----------"
          );
          console.log(e);
          reject(e);
        });
    });
  }

};
