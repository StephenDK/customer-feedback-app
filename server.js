// Import express library
const express = require('express');
// Require mongoose
const mongoose = require('mongoose');
// DATABASE MODELS
require('./models/user.js');
// require cookie-session package
const cookieSession = require('cookie-session');
// require passport 
const passport = require('passport');
const keys = require('./config/keys');

/****NOTE*****
The order of module requires can make and break an application.
In this instance if you require passport before requiring 
the mongoose model before we define the model. */

// require passport service
require('./services/passport');


// connect to Mongo DB
mongoose.connect(keys.mongoURI);

// express instance
const app = express();
// tell express to use cookie-sessions
app.use(
    cookieSession({
        // Last 30 days before expire
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
// Tell express to use passport to handle oauth
app.use(passport.initialize());
app.use(passport.session());


// import auth routes
require('./routes/authRoutes')(app);

// PORT
const PORT = process.env.PORT || 5000;

// set server to listen
app.listen(PORT, function() {
    console.log("Application listening on " + "localhost:" + PORT);
});