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
    no: { type: Number, default: 0 }
});

mongoose.model('surveys', surveySchema);