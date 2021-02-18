const express = require('express');

const UpdateController = require('../controllers/update.controller');


const updateRouter = express.Router({ caseSensitive: true });


updateRouter.put('/api/update/:id', function (req, res) {

    let id = req.params.id;
    if (id !== null) {

        UpdateController(req.body, id)
            .then(r => {
                res.json(r)
            }).catch(e => {
                res.status(202).json({ e });

            })


    }



});


module.exports = updateRouter;

