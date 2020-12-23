// const { findAllByTestId } = require("@testing-library/react");

module.exports = function (sequelize, DataTypes) {
  const GroupWithContact = sequelize.define("GroupWithContact", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  GroupWithContact.associate = model => {
    GroupWithContact.belongsTo(model.Group, {
      foreignKey: {
        allowNull: false
      }
    });

    GroupWithContact.hasMany(model.Contact, {
      onDelete: "cascade"
    });
  };

  return GroupWithContact;
};


















// module.exports = function(sequelize, DataTypes) {
//     var AssociatedGroup = sequelize.define("AssociatedGroup", {
//       id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
//       group: DataTypes.INTEGER,
//       contact: DataTypes.INTEGER
//     });

//     return AssociatedGroup;
//   };