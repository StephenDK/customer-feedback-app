// require mongoose
const mongoose = require('mongoose');
// pull out schema obj from mongoose
const Schema = mongoose.Schema;
// import recipient schema
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    // the type is the id of the user that owns the record
    // The ref tells mongoose to get the objectId from the User collection
    // the underscore indicates that this is a reference field
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);