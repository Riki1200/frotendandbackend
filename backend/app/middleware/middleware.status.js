/**
 * @param {Request} req 
 * @param {Response} res
 * @param {import("express").NextFunction} next
 */
module.exports = function (req, res, next) {
    if (req.url !== "/") return next();
    return res.status(400).send({ messages: 'rosource not found' });

};

