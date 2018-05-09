// import sendgrid dependencies
const sendgrid = require('sendgrid');
// setup helper function 
const helper = sendgrid.mail;
// require sendgrid API keys
const keys = require('../config/keys');

class Mailer extends helper.Mail {

}

// export mailer
module.exports = Mailer;