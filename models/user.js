// Import mongoose modules
const mongoose = require('mongoose');

// mongoose schema object
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

// Tell mongoose to create a new collection
mongoose.model('users', userSchema);