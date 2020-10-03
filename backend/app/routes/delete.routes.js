const express = require('express');

const DeleteUser = express.Router({ caseSensitive: true });


DeleteUser.delete('/api/:id', function (req, res) {

});

module.exports = {
    DeleteUser
}

