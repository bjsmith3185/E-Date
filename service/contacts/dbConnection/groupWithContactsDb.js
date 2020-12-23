const GroupWithContact = require("./model");

module.exports = function (app) {
  // Get All GroupsWithContact
  async function getAllGroupsWithContact() {
    const groupWithContact = await GroupWithContact.getAllGroups();
    return groupWithContact;
  }
  // Add GroupsWithContact
  async function addGroupsWithContact(groupObj) {
    const groupWithContact = await GroupWithContact.create(groupObj);
    return groupWithContact;
  }
  // Get GroupsWithContact by ID
  async function getGroupsWithContact(id) {
    const groupWithContact = await GroupWithContact.getGroup(id);
    return groupWithContact;
  }
  // Update GroupsWithContact
  async function editGroupsWithContact(id, { body }) {
    const groupWithContact = await GroupWithContact.update(id, { body }, {
      where: { id: req.body.id }
    });
    return groupWithContact;
  }
  // Delete GroupsWithContact
  async function deleteGroupWithContact(id, { body }) {
    const grogroupWithContactup = await GroupWithContact.destroy(id, { body }, {
      where: { id: req.body.id }
    });
    return groupWithContact;
  }
};