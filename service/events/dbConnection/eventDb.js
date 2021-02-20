const db = require("../../../model");
// const eventObj = {
//     eventName: DataTypes.STRING,
//     startDate: DataTypes.DATE,
//     endDate: DataTypes.DATE,
//     startTime: DataTypes.TIME,
//     endTime: DataTypes.TIME,
//     notes: DataTypes.STRING,
//     userId: DataTypes.INTEGER
// };

module.exports = {
    // Get All Events
    getAllEvents: async function () {
        const allEvents = await db.Event.findAll();
        return allEvents;
    },
    // Add Event
    addEvent: async function (eventObj) {
        const newEvent = await db.Event.create(eventObj);
        return newEvent;
    },
    // Get Event by ID
    getEvent: async function (id) {
        const event = await db.Event.findAll({
            where: {
                id: req.params.id
            }
        });
    },
    // Update Event by ID
    editEvent: async function (id, { body }) {
        const updatedEvent = await db.Event.update({ body }, {
            where: {
                id: req.params.id
            }
        });
    },
    // Delete Event by ID
    deleteEvent: async function (id, { body }) {
        const deletedEvent = await db.Event.destroy(id, { body }, {
            where: {
                id: req.params.id
            }
        });
    }
};