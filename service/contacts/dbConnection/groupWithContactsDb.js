const db = require("../../../model");

module.exports = {
  // Get All GroupsWithContact
getAllGroupsWithContacts: function() {
  db.GroupWithContact.findAll({})
  .then(groups => {
    console.log(`Found ${groups.length} groups with contacts matching records.`);
    return groups;
  })
  .catch(e => {
    console.log("------------ an error occurred getting all groups with contacts ----------")
    console.log(e);
    return e;
  });
},

// Add Group with contact
addGroupWithContact: function(groupId, contactId) {
  db.GroupWithContact.create({
    groupId: groupId,
    contactId: contactId
  })
  .then(newGroup => {
    console.log(`New groupWithContact Id: ${newGroup.groupId}, with contact Id: ${newGroup.contactId} has been created.`);
    return newGroup;
  })
  .catch(e => {
    console.log("------------ an error occurred adding a newGroup With Contact ----------")
    console.log(e);
    return e;
  });
},

// Get GroupWithContact by GroupID
getGroupById: function(groupId) {
  db.GroupWithContact.findAll(
    {groupId: groupId }
    )
    .then(group => {
      console.log(`group ${group.groupId}, has ${group.length} contacts associated.`);
      return group;
    })
    .catch(e => {
      console.log("------------ an error occurred getting a group by id ----------")
      console.log(e);
      return e;
    });
},
// Update GroupId for all occurances (if the groupId = 1, change all of the to the new value)
updateGroupWithContact: function(oldId, newId) {
  db.GroupWithContact.findall({
    groupId: oldId
  })
  .then(group => {
    group.updateAttributes({
      where: { groupId: newId }
    })
    .then(updatedGroup => {
      console.log("the group was updated");
      console.log(updatedGroup);
      return updatedGroup
    })
    .catch(e => {
      console.log("------------ an error occurred updating a groupWithContacts ----------")
      console.log(e);
      return e;
    });
  })
  .catch(e => {
    console.log("------------ an error occurred getting a groupWithContacts for updating ----------")
    console.log(e);
    return e;
  });

},

// Delete a single GroupWithContact by groupId and contactId
deleteGroup: function(groupId, contactId) {
  db.GroupWithContact.destory({
    where: { groupId: groupId, contactId: contactId }
  })
  .then(deletedGroup => {
    console.log(`Has it been deleted? 1 means yes, 0 means no: ${deletedGroup}`);
    return deletedGroup;
  });
}

};



