// // Requiring necessary npm packages
// const express = require("express");
// const session = require("express-session");
// // Requiring passport as we've configured it
// const passport = require("./config/passport");
// const json2xls = require("json2xls")

// // Requiring routes directory
// const routes = require("./routes");


// // Setting up port and requiring models for syncing
// const PORT = process.env.PORT || 3001;
// const db = require("./models");

// // Creating express app and configuring middleware needed for authentication
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // We need to use sessions to keep track of our user's login status
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static("public"))
// app.use(json2xls.middleware);

// // Requiring our routes
// // require("./routes/api-routes.js")(app);
// app.use(routes);


// // Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});