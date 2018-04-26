// require passport
const passport = require('passport');

// export route function
module.exports = (app) => {

    // Setup authentication route handler *Passport step 5*
        app.get('/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // Log user out
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    // This code sends the google profile user code to google
    // and returns the profile information information od the user
    app.get('/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('https://quiet-badlands-38905.herokuapp.com/dashboard');
    });

    // If the current user is signed into the application
    // this route is used to determine if the user is signed in
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })};