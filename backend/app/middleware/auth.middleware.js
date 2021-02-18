const jsonwebtoken = require('jsonwebtoken');

/**
 * Middleware for authetication with JSONWEBTOKEN
 * @param {Request} req 
 * @param {Response} res 
 * @param {import('express').NextFunction} next 
 * @return Status
 */

const AuthMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"]



    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) {
        return res.sendStatus(401)
    }
    jsonwebtoken.verify(token, process.env.TOKEN, async (error, user) => {
        if (error) {
            return res.sendStatus(403).json(error)
        }
        req.user = user;
        next();
    })
}



module.exports = AuthMiddleware;