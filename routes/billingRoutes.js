// require keys
const keys = require('../config/keys');
// require stripe
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {

    app.post('/api/stripe', (req, res) => {

    });
};