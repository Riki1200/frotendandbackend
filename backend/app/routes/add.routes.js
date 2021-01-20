const express = require('express');
const Add = require('../controllers/add.controller.js');

const addrouter = express.Router({ caseSensitive: true });


addrouter.post('/api/add', function (req, res) {

    let { name, day, month, year, history, url } = req.body;
    console.log(name, day, month, year, history, url)
    if (name && day && month && year && history && url) {

        Add(req.body).then((_r) => {
            res.json({ ..._r });
        }).catch(err => {
            console.log(err)
            res.json({ ...err });
        })

    }








})



module.exports = addrouter;

