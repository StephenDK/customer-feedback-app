// Import express library
const express = require('express');
// express instance
const app = express();
// PORT
var PORT = 5000;

// Home route handler
app.get('/', (req,res) => {
    res.send({hi: 'there'});
});





// set server to listen
app.listen(PORT, function() {
    console.log("Application listening on port: " + PORT);
});