//Events table

module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        eventName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: DataTypes.DATEONLY,
        endDate: DataTypes.DATEONLY,
        startTime: DataTypes.TIME,
        endTime: DataTypes.TIME,
        notes: DataTypes.STRING
    });

    return Event;
}