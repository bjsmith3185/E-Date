
const db = require("../../../model");

module.exports = {
  // Get All Groups
  getAllGroups: function() {
    db.Group.findAll({})
    .then(groups => {
      console.log(`Found ${groups.length} groups matching records.`);
      return groups;
    })
    .catch(e => {
      console.log("------------ an error occurred getting all groups ----------")
      console.log(e);
      return e;
    });
  },

  // Add Group
  addGroup: function(groupObj) {
    db.Group.create(groupObj)
    .then(newGroup => {
      console.log(`New group ${newGroup.name}, with id ${newGroup.id} has been created.`);
      return newGroup;
    })
    .catch(e => {
      console.log("------------ an error occurred adding a newGroup ----------")
      console.log(e);
      return e;
    });
  },

  // Get Group by ID
  getGroupById: function(id) {
    db.Group.findOne(
      {id: id }
      )
      .then(group => {
        console.log(`group ${group.name}, with id ${group.id} has been retreived.`);
        return group;
      })
      .catch(e => {
        console.log("------------ an error occurred getting a group ----------")
        console.log(e);
        return e;
      });
  },
  // Update Group
  updateGroup: function(id, body) {
    db.Group.findOne({
      id: id
    })
    .then(group => {
      group.updateAttributes(body)
      .then(updatedGroup => {
        console.log("the group was updated");
        console.log(updatedGroup);
        return updatedGroup
      })
      .catch(e => {
        console.log("------------ an error occurred updating a group ----------")
        console.log(e);
        return e;
      });
    })
    .catch(e => {
      console.log("------------ an error occurred getting a group for updating ----------")
      console.log(e);
      return e;
    });

  },

  // Delete Group
  deleteGroup: function(id) {
    db.Group.destory({
      where: { id: id }
    })
    .then(deletedGroup => {
      console.log(`Has it been deleted? 1 means yes, 0 means no: ${deletedGroup}`);
      return deletedGroup;
    });
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


