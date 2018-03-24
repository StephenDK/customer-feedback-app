// Import express library
const express = require('express');
// require passport service
require('./services/passport');


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