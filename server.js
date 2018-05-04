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
const bodyParser = require('body-parser');
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

// tell the app to use body-parser
app.use(bodyParser.json());

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
// billing routes
require('./routes/billingRoutes')(app);

// when the application is in production
if (process.env.NODE_ENV === 'production') {
    // Express will serve production assests
    // like main.js file, or main.css file
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesen't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// PORT
const PORT = process.env.PORT || 5000;

// set server to listen
app.listen(PORT, function() {
    console.log("Application listening on " + "localhost:" + PORT);
});