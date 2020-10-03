const express = require('express');

const DeleteUser = express.Router({ caseSensitive: true });


DeleteUser.delete('/api/:id', (req, res) => {

});

module.exports = {
    DeleteUser
}

