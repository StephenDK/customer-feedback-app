// Import mongoose modules
const mongoose = require('mongoose');

// mongoose schema object
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

// Tell mongoose to create a new collection
mongoose.model('users', userSchema);