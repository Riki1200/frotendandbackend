const express = require('express');
const cors = require('cors');
const middleware = require('./middleware/middleware.status.js');
let https = require('https');
//Routes
const { addrouter, addUser } = require('./routes/index.js');

//
const app = express();



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use endpoints
app.use(addUser)
app.use(addrouter)
//Middleware
app.use(middleware);


module.exports = app;
