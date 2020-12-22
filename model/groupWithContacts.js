const { findAllByTestId } = require("@testing-library/react");

module.exports = function (sequelize, DataTypes) {
  const GroupWithContacts = sequelize.define("GroupWithContacts", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  GroupWithContacts.associate = model => {
    GroupWithContacts.belongsTo(model.Group, {
      foreignKey: {
        allowNull: false
      }
    });

    GroupWithContacts.hasMany(model.Contact, {
      onDelete: "cascade"
    });
  };

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