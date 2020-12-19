module.exports = function(sequelize, DataTypes) {
  var AssociatedGroup = sequelize.define("AssociatedGroup", {
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true}
  });

  Contact.belongsToMany(Group, { through: AssociatedGroup, foreignKey: 'id_contact' });
  Group.belongsToMany(Contact, { through: AssociatedGroup, foreignKey: 'id_group' });



  return AssociatedGroup;
};












// module.exports = function(sequelize, DataTypes) {
//     var AssociatedGroup = sequelize.define("AssociatedGroup", {
//       id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
//       group: DataTypes.INTEGER,
//       contact: DataTypes.INTEGER
//     });

//     return AssociatedGroup;
//   };