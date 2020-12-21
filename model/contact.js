//Contacts table

module.exports = function(sequelize, DataTypes) {
    var Contacts = sequelize.define("Contacts", {
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
      comments: DataTypes.STRING
    });

  //  Contact.hasMany(Group, { foreignKey: 'id' });

    return Contacts;
  };