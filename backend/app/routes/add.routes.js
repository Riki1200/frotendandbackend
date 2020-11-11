const express = require('express');
const Add = require('../controllers/add.controller.js');

const addrouter = express.Router({ caseSensitive: true });


addrouter.post('/api/add', function (req, res) {

    let { name, day, month, year, history, url } = req.body;

    if (name !== undefined &&
        day !== undefined
        && month !== undefined
        && year !== undefined
        && history !== undefined
        && url !== undefined) {

        Add(req.body).then((_r) => {
            res.json({ ..._r });
        }).catch(err => {
            console.log(err)
            res.json({ ...err });
        })

    }








})



module.exports = addrouter;

