// Import passport *Passport step 1*
const passport = require('passport');
// Import Google passport Strategy *Passport step 2*
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Require mongoose
const mongoose = require('mongoose');
// Import Google+ API keys *Passport step 4*
const keys = require('../config/keys');

const User = mongoose.model('users');


// New passport instance *Passport step 3*
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // Callback URL
        callbackURL: '/auth/google/callback'
    }, function (accessToken, refreshToken, profile, done) {
    //    Create a new model instance and save to db
        new User({ googleId: profile.id }).save();
    })
);