const addrouter = require('./add.routes.js');
const addUser = require('./users.routes.js');
const getUsers = require('./users.routes.js');
const getData = require('./history.routes.js');
const deleteUser = require('./delete.routes.js');
const updateRouter = require('./update.routes.js');

/**
 * Routes
 * @returns {Array<import('express').IRoute}
 */
module.exports = [
    addrouter,
    addUser,
    getUsers,
    getData,
    deleteUser,
    updateRouter
]




