// Import express library
const express = require('express');

// Import passport *Passport step 1*
const passport = require('passport');
// Google passport Strategy *Passport step 2*
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// New passport instance *Passport step 3*
passport.use(new GoogleStrategy());


// express instance
const app = express();

// PORT
const PORT = process.env.PORT || 5000;







// set server to listen
app.listen(PORT, function() {
    console.log("Application listening on " + "localhost:" + PORT);
});