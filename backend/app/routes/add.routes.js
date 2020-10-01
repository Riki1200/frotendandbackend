const express = require('express');
const { Add } = require('../controllers/add.controller.js');

const addrouter = express.Router({ caseSensitive: true });


addrouter.post('/api/add', async function (req, res, next) {
    try {
        await Add(req.body)
        res.json({ code: 200, messages: "User add sucesss" });

    } catch (error) {
        res.status(400).json({ error: error });
    }
});



module.exports = addrouter;

