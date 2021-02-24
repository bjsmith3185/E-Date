
const db = require("../../../model");

module.exports = {
  // Get All Groups
  getAllGroups: function() {
  return new Promise((resolve, reject) => {

    db.Group.findAll({})
    .then(groups => {
      console.log(`Found ${groups.length} groups matching records.`);
      resolve(groups);
    })
    .catch(e => {
      console.log("------------ an error occurred getting all groups ----------")
      console.log(e);
      resolve(e);
    });
  })
  },

  // Add Group
  addGroup: function(groupObj) {
    return new Promise((resolve, reject) => {

    console.log("in the groupDb.js addGroup file");
    console.log(groupObj);

    db.Group.create(groupObj)
    .then(newGroup => {
      console.log(`New group ${newGroup.name}, with id ${newGroup.id} has been created.`);
      resolve(newGroup);
    })
    .catch(e => {
      console.log("------------ an error occurred adding a newGroup ----------")
      console.log(e);
      resolve(e);
    });
  })
  },

  // Get Group by ID
  getGroupById: function(id) {
    return new Promise((resolve, reject) => {
    db.Group.findOne(
      {id: id }
      )
      .then(group => {
        console.log(`group ${group.name}, with id ${group.id} has been retreived.`);
        resolve(group);
      })
      .catch(e => {
        console.log("------------ an error occurred getting a group ----------")
        console.log(e);
        resolve(e);
      });
    })
  },
  // Update Group
  updateGroup: function(id, body) {
    return new Promise((resolve, reject) => {
    db.Group.findOne({
      id: id
    })
    .then(group => {
      group.updateAttributes(body)
      .then(updatedGroup => {
        console.log("the group was updated");
        console.log(updatedGroup);
        resolve(updatedGroup);
      })
      .catch(e => {
        console.log("------------ an error occurred updating a group ----------")
        console.log(e);
        resolve(e);
      });
    })
    .catch(e => {
      console.log("------------ an error occurred getting a group for updating ----------")
      console.log(e);
      resolve(e);
    });
  })
  },

  // Delete Group
  deleteGroup: function(id) {
    return new Promise((resolve, reject) => {
    db.Group.destory({
      where: { id: id }
    })
    .then(deletedGroup => {
      console.log(`Has it been deleted? 1 means yes, 0 means no: ${deletedGroup}`);
      resolve(updatedGroup);
    })
    .catch(e => {
      console.log("------------ an error occurred deleting a group ----------")
      console.log(e);
      resolve(e);
    });
  })
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


