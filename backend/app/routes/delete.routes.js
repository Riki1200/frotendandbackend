const express = require('express');

const deleteUser = express.Router({ caseSensitive: true });

const { DeletedHistory } = require('../controllers/remove.controller');





deleteUser.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;

    console.log(id)
    if (id !== null) {
        DeletedHistory(id).then(_ => {
            res.json(_);
        }).catch(_error => {
            res.status(202).json(_error)
        })
    }

});

module.exports = deleteUser


