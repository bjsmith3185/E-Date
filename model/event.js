//Events table

module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
        id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        eventName: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        startTime: DataTypes.TIME,
        endTime: DataTypes.TIME,
        notes: DataTypes.STRING
    });

    return Events;
}