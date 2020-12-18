
Info for E-Date server

To only run the server:
    open terminal in root directory
    node server.js
    server will run on 3001

    to healthCheck the service:
    "get" http://localhost:3001/healthcheck


To get all contact:
    "get" http://localhost:3001/api/contacts/

To add a contact:
    "post" http://localhost:3002/api/contacts/
        {
            "name":"brian",
            "phone":"704-222-444"
        }




To get all groups:
    "get" http://localhost:3001/api/groups/

To add a group:
    "post" http://localhost:3001/api/groupss/
        {
            "groupName":"test group"
        }






