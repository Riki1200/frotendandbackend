const Mongoose = require('mongoose');
const { URL } = require('../config/port')


/**
 * Connection for MongoDB
 * @type {Promise<Mongoose.Connection>}
 * @typedef Moongose
 * @function Promise
 */



const connected = Mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})










module.exports = connected;
