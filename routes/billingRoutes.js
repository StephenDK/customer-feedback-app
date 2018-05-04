// require keys
const keys = require('../config/keys');
// require stripe
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {

    app.post('/api/stripe', (req, res) => {
        stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
    });
};