// Import express library
const express = require('express');
// Require mongoose
const mongoose = require('mongoose');
// DATABASE MODELS
require('./models/User');

/****NOTE*****
The order of module requires can make and break an application.
In this instance if you require passport before requiring 
the mongoose model before we define the model. */

// require passport service
require('./services/passport');

// setup mongoose to use promise
mongoose.Promise = Promise;
// connect to Mongo DB
mongoose.connect("mongodb://localhost/customerService");

// express instance
const app = express();

// import auth routes
require('./routes/authRoutes')(app);

// PORT
const PORT = process.env.PORT || 5000;

// set server to listen
app.listen(PORT, function() {
    console.log("Application listening on " + "localhost:" + PORT);
});