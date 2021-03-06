
const passwordHash = require('password-hash');




/**
 * 
 * @param {String} password 
 * @returns {String}
 */
const ecryptePassoword = (password) => {

    let hashPass = passwordHash.generate(password)
    return hashPass;
}

/**
 * This function u return string
 * @param {String} passowrd after password
 * @param {String} encryptePassword descrypted password
 * @returns {Boolean}
 */
const descryptePassword = (passowrd, encryptePassword) => {
    let compareEquals = passwordHash.verify(passowrd, encryptePassword)
    return compareEquals;
}

module.exports = {
    encryptePass: ecryptePassoword,
    descrytePass: descryptePassword
}