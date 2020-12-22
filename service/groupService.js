const Group = require("./model");

module.exports = function (app) {
  // Get All Groups
  async function getAllGroups() {
    const groups = await Group.getAllGroups();
    return groups;
  }
  // Add Group
  async function addGroup(groupObj) {
    const group = await Group.create(groupObj);
    return group;
  }
  // Get Group by ID
  async function getGroup(id) {
    const group = await Group.getGroup(id);
    return group;
  }
  // Update Group
  async function editGroup(id, { body }) {
    const group = await Group.update(id, { body }, {
      where: { id: req.body.id }
    });
    return group;
  }
  // Delete Group
  async function deleteGroup(id, { body }) {
    const group = await Group.destroy(id, { body }, {
      where: { id: req.body.id }
    });
    return group;
  }
};
  // async function joinContactToGroup(contactId, groupId) {
  //   // find the user & project
  //   const contact = await Contact.findOne({ where: { id: contactId } });
  //   const group = await Group.findOne({ where: { id: groupId } });
  //   // add project and user to the join table with the custom method:
  //   group.addContact(contact);
  // }



// async function addContactToGroup(contactId, groupId) {
//     // find the user record
//     const user = await User.findOne({ where: { id: userId } });
//     // create the project
//     const project = await Project.create(projectObj);
//     // set the user (project manager) foreign key
//     project.setUser(user);
//   }


// project.getUsers()
// project.countUsers()
// project.hasUser()
// project.hasUsers()
// project.setUsers()
// project.addUser()
// project.addUsers()
// project.removeUser()
// project.removeUsers()
// project.createUser()


