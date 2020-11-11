const express = require('express');
const cors = require('cors');
const middleware = require('./middleware/middleware.status.js');

//Routes
const { addrouter, addUser, getData, deleteUser, updateRouter } = require('./routes/index.js');

//
const app = express();



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use endpoints
app.use(getData);
app.use(addUser)
app.use(addrouter)
app.use(deleteUser);
app.use(updateRouter);

//Middleware
app.use(middleware);


module.exports = app;
