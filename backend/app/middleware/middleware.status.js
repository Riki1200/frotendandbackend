module.exports = function (req, res, next) {
    if (req.url) next();
    return res.status(400).send({ messages: 'rosource not found' });

};

