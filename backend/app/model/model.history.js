const mogoose = require('mongoose');

let { Schema, model } = mogoose;



const HistorySchema = new Schema({
    _id: {
        type: mogoose.Types.ObjectId

    },
    name: {
        type: String,
        required: true

    },
    history: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },

    created: {
        type: Date,
        default: Date.now
    }
})


module.exports = model('history', HistorySchema)