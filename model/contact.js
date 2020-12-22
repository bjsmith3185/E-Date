

module.exports = function(sequelize, DataTypes) {
    const Contact = sequelize.define("Contact", {
      id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      middleInitial: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      birthday: DataTypes.DATE,
      notes: DataTypes.STRING
    });

    Contact.associate = model => {
      Contact.belongsTo(model.GroupWithContacts, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Contact;
  };