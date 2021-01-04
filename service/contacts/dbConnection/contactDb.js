const Contact = require("../../../model");
const contactObj = {
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  middleInitial: req.body.middleInitial,
  address: req.body.address,
  phone: req.body.phone,
  email: req.body.email,
  birthday: req.body.birthday,
  comments: req.body.comments,
  city: req.body.city,
  state: req.body.state,
  zipCode: req.body.zipCode
};
// ,
//   userId: req.body.userId

module.exports = function () {
  // Get All Contacts
  async function getAllContacts() {
    const allContacts = await Contact.findAll();
    return allContacts;
  }

  // Add Contact
  async function addContact(contactObj) {
    const newContact = await Contact.create(contactObj);
    return newContact;
  }

  // Get Contact By ID
  async function getContact(id) {
    const contact = await Contact.findAll({
      where: { id: req.params.id }
    });
    return contact;
  }

  // Edit Contact
  async function editContact(id, {body}) {
    // passing in {body} in update method
    // not passing id in update method because we're not updating the id
    const updatedContact = await Contact.update({ body }, {
      where: { id: req.params.id }
    });
    return updatedContact;
  }

  // Delete Contact
  async function deleteContact(id) {
    // deleting all contact info where id matches req.params.id
    // so do not have to pass anything in destroy method
    const deletedContact = await Contact.destroy({
      where: { id: req.params.id }
    });
    return deletedContact;
  }
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