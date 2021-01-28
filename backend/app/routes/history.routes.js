const express = require('express');
const { GetHistory, GetHistoryId } = require('../controllers/get.controller.js');




const getData = express.Router({ caseSensitive: true });


getData.get('/api/get', function (_, res) {
    GetHistorqy().then((_) => {
        res.json(_);
    }).catch((_) => {
        res.status(402).json(..._);
    })
})

getData.get('/api/get/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    GetHistoryId(parseInt(id)).then((_) => {
        res.json(_);
    }).catch((_) => {

        res.status(202).json(_);
    })
})



module.exports = getData


