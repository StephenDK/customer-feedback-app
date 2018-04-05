// require passport
const passport = require('passport');

// export route function
module.exports = (app) => {

    // Setup authentication route handler *Passport step 5*
        app.get('/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    // This code sends the google profile user code to google
    // and returns the profile information information od the user
    app.get('/auth/google/callback', passport.authenticate('google'));


    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
};