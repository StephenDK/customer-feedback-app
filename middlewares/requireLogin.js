module.exports = (req, res, next) => {
    // takes the incoming request and modifies the body
    // next argument runs after the function is complete ie done() in passport
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!' });
    }

    next();
};