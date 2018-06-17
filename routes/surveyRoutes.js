//=============================================
// WEBHOOKS SETUP STEP 2:  
// import packages
const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
//=============================================


const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');


module.exports = app => {

    app.get('/api/surveys/thanks', (req, res) => {
        res.send("Thanks for voting!!");
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        // get the props from the req.body
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Great place to send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));
       try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            // send back user model with updated credits 
            res.send(user)
       } catch (err) {
           res.status(422).send(err);
       }
    });
    // =============================================
    // WEBHOOKS SETUP STEP 1:
    // Add npm install --save localtunnel
    // Add localtunnel to the package.json file scripts
    // Add localtunnel specified domain from scripts to sendgrid
    // add a new route handler for the webhook domain
    app.post('/api/surveys/webhooks', (req, res) => {
        // console.log(req.body); List of events
        // res.send({});
        const events = _.map(req.body, (event) => {
            const pathname = new URL(event.url).pathname;
            const p = new Path('/api/surveys/:surveyId/:choice');
            console.log(p.test(pathname));
        })
    });

};