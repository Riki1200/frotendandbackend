const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const middleware = require('./middleware/middleware.status.js');
const connect = require('./db/dbConfig');



connect.then((r) => {

    console.info('The connection was a successs with MongoDB Databse')
}).catch(() => {
    console.error('The connection is wrong! Please, try again connected at network')
})


/**
 * @requires Routes
 */
const Routes = require('./routes/index.js');


/***
 * Constant init express app
 * @function express()
 */
const app = express();


//using Middleware
app.use(middleware);
app.use(morgan('dev'))
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Endpoints
app.use(...Routes);
//app.use(addUser)
//app.use(addrouter)
//app.use(deleteUser);
//app.use(updateRouter);



module.exports = app;
