const dontEnv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT || 4000;


if (process.env.NODE_ENV !== 'production') dontEnv.config(
    {
        path: path.resolve(__dirname, '../../.env')
    })





const URL = process.env.MONGO_URL;



module.exports = { PORT, URL }