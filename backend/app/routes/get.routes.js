const express = require('express');

const getData = express.Router({ caseSensitive: true });


getData.get('/api/get', function (req, res) {

});

module.exports = {
    getData
}

