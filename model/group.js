module.exports = function (sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Group.associate = function(model) {

  //   Group.hasOne(model.GroupWithContact, {
  //     onDelete: "cascade"
  //   });
  // };

return Group;
};