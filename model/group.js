module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
      id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
      groupName: DataTypes.STRING
    });

    Group.belongsTo(Contact, { foreignKey: 'id_contact' });
    Contact.hasMany(Group, { foreignKey: 'id_contact' });

    return GroupNames;
  };