// Import passport *Passport step 1*
const passport = require('passport');
// Import Google passport Strategy *Passport step 2*
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Import Google+ API keys *Passport step 4*
const keys = require('../config/keys');


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