const express = require('express');

const UpdateController = require('../controllers/update.controller');


const updateRouter = express.Router({ caseSensitive: true });


updateRouter.put('/api/update/:id', function (req, res) {

    let id = req.params.id;

    let { name, day, month, year, history, url } = req.body;



    if (name !== undefined && history !== undefined && day !== undefined && month !== undefined && year !== undefined && url !== undefined) {

        UpdateController([name, history, `${day}/${month}/${year}`, url, parseInt(id)])
            .then(r => {
                res.json(r)
            }).catch(e => {
                res.status(202).json({ e });

            })


    }



});


module.exports = updateRouter;

