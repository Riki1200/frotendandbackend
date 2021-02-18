const jsonwebtoken = require('jsonwebtoken');
/**
 * 
 * @param {object} user 
 * @param {object} user.user
 * @returns {String}
 */
function AccessToken(user) {
    return jsonwebtoken.sign({ user }, process.env.TOKEN,
        {
            expiresIn: "10m",
            algorithm: "HS512"
        })
}

module.exports = AccessToken;