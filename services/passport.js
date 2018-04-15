// Import passport *Passport step 1*
const passport = require('passport');
// Import Google passport Strategy *Passport step 2*
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Require mongoose
const mongoose = require('mongoose');
// Import Google+ API keys *Passport step 4*
const keys = require('../config/keys');

const User = mongoose.model('users');

// Turns mongo model with user id into a cookie
passport.serializeUser((user, done) => {
    // done is a callback called after passport work has been done
    // 1st argument is an error argument
    // 2nd argument identifies the user assigned by mongo
    done(null, user.id);
});

// deserializeUser function
// turns cookie back into a mongo model
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

// New passport instance *Passport step 3*
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        // Callback URL
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        // Query datbase to find if user exists
        const existingUser = await User.findOne({ googleId: profile.id })
            
        if (existingUser) {
                // We already have a record with the user id.
                // Tell passport we are done().
                    return done(null, existingUser);
            }
                // We dont have a record with this id, create new user
                const user = await new User({ googleId: profile.id }).save()
                done(null, user);
    })
);