// const Event = require("../../../model");
// // const eventObj = {
// //     title: DataTypes.STRING,
// //     startDate: DataTypes.DATE,
// //     endDate: DataTypes.DATE,
// //     startTime: DataTypes.TIME,
// //     endTime: DataTypes.TIME,
// //     notes: DataTypes.STRING,
// //     userId: DataTypes.INTEGER
// // };

// module.exports = function () {
//     // Get All Events
//     async function getAllEvents() {
//         const allEvents = await Event.findAll();
//         return allEvents;
//     }
//     // Add Event
//     async function addEvent() {
//         const newEvent = await Event.create(eventObj);
//         return newEvent;
//     }
//     // Get Event by ID
//     async function getEvent(id){
//         const event = await Event.findAll({
//             where:{
//                 id: req.params.id
//             }
//         });
//     }
//     // Update Event by ID
//     async function editEvent(id, { body }) {
//         const updatedEvent = Event.update({ body }, {
//             where: {
//                 id: req.params.id
//             }
//         });
//     }
//     // Delete Event by ID
//     async function deleteEvent(id, {body}){
//         const deletedEvent = Event.destroy(id, {body},{
//             where:{
//                 id: req.params.id
//             }
//         });
//     }
// };