// import sendgrid dependencies
const sendgrid = require('sendgrid');
// setup helper function 
const helper = sendgrid.mail;
// require sendgrid API keys
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();

        this.from_email = new helper.Email('no-reply@customerserver.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);
    }
}

// export mailer
module.exports = Mailer;