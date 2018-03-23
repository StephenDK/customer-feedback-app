// Import express library
const express = require('express');

// Import passport *Passport step 1*
const passport = require('passport');
// Import Google passport Strategy *Passport step 2*
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Import Google+ API keys *Passport step 4*
const keys = require('./config/keys');

// express instance
const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// New passport instance *Passport step 3*
passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // Callback URL
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log("accessToken: " + accessToken);
        console.log("refreshToken: " + refreshToken);
        console.log("Profile: " + JSON.stringify(profile));

    })
);

app.get('/auth/google/callback', passport.authenticate('google'));

// Setup authentication route handler *Passport step 5*
app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);


// set server to listen
app.listen(PORT, function() {
    console.log("Application listening on " + "localhost:" + PORT);
});