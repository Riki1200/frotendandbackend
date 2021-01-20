const express = require('express');
const cors = require('cors');
const middleware = require('./middleware/middleware.status.js');

/**
 * @requires Routes
 */
const { addrouter, addUser, getData, deleteUser, updateRouter } = require('./routes/index.js');

const authMiddleware = require('./middleware/auth.middleware');
/***
 * Constant init express app
 * @function express()
 */
const app = express();



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(authMiddleware);

//Endpoints
app.use(getData);
app.use(addUser)
app.use(addrouter)
app.use(deleteUser);
app.use(updateRouter);

//using Middleware
app.use(middleware);


module.exports = app;
