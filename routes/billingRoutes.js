
// require keys
const keys = require('../config/keys');
// require stripe
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {

    app.post('/api/stripe', async (req, res) => {
        if (!req.user) {
            return res.status(401).send({ error: "You must log in!" })
        }
        
        
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        // get the user model from passport with req.user
        req.user.credits += 5;
        const user = await req.user.save();
        // send the user data to the browser
        res.send(user);
    });
};