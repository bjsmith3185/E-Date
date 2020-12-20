module.exports = function(sequelize, DataTypes) {
  var GroupWithContacts = sequelize.define("GroupWithContacts", {
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true}
  });

  Contacts.belongsToMany(Groups, { through: AssociatedGroup, foreignKey: 'id_contact' });
  Groups.belongsToMany(Contacts, { through: AssociatedGroup, foreignKey: 'id_group' });



  return GroupWithContacts;
};












// module.exports = function(sequelize, DataTypes) {
//     var AssociatedGroup = sequelize.define("AssociatedGroup", {
//       id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
//       group: DataTypes.INTEGER,
//       contact: DataTypes.INTEGER
//     });

//     return AssociatedGroup;
//   };