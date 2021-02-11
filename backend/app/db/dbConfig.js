const Mogoose = require('mongoose');
const { URL } = require('../config/port')


/**
 * Connection for MongoDB
 * @typedef Moongose
 * @function Promise
 */



const connected = Mogoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})










module.exports = connected;
