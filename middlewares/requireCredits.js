module.exports = (req, res, next) => {
    // takes the incoming request and modifies the body
    // next argument runs after the function is complete ie done() in passport
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits!' });
    }

    next();
};