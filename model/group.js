module.exports = function (sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Group.hasOne(model.GroupWithContacts, {
    onDelete: "cascade"
  });
};

return Group;
};