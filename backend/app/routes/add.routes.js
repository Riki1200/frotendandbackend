const express = require('express');
const Add = require('../controllers/add.controller.js');


/**
 * Create endpoit for add router
 * @type {express.Router}
 */

const addrouter = express.Router({ caseSensitive: true });


addrouter.post('/api/add', function (req, res) {

    let { name, history, url } = req.body;

    if (name && history && url) {


        let HistoryClient = {
            name: name,
            history: history,
            url: url
        }

        Add(HistoryClient).then((_r) => {
            res.json({ ..._r });
        }).catch(err => {

            res.json({ ...err });
        })

    }








})



module.exports = addrouter;

