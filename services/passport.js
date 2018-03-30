// Import passport *Passport step 1*
const passport = require('passport');
// Import Google passport Strategy *Passport step 2*
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Require mongoose
const mongoose = require('mongoose');
// Import Google+ API keys *Passport step 4*
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {

});

// New passport instance *Passport step 3*
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // Callback URL
        callbackURL: '/auth/google/callback'
    }, function (accessToken, refreshToken, profile, done) {
        // Query datbase to find if user exists
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    // We already have a record with the user id.
                    // Tell passport we are done().
                     return done(null, existingUser);
                } else {
                    // We dont have a record with this id, create new user
                    new User({ googleId: profile.id }).save()
                    .then(user => done(null, user));

                }
            })
    })
);