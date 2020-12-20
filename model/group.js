module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("Groups", {
      id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
      groupName: DataTypes.STRING
    });

    // Groups.belongsTo(Contacts, { foreignKey: 'id_contact' });
    // Contacts.hasMany(Groups, { foreignKey: 'id_contact' });

    return Groups;
  };