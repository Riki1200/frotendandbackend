const mongoose = require('mongoose');

let { Schema, model } = mongoose;



const HistorySchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true

    },
    history: {
        type: String,
        required: true
    },
    photoURI: {
        type: String,
        required: true,
        required: true
    },

    created: {
        type: Date,
        default: Date.now
    }
})



/**
 * Class use for Model history with MongoDB
 * @class Histroy Model
 */

class HistoryModel {
    /**
     * Defined property for History model class with instance MongoDB MOodel
     * @property {Model Instance}
     */
    HistoryModel = null


    constructor() {
        this.HistoryModel = model('history', HistorySchema)
    }


    /**
     * @returns {Promise<mongoose.Model>} Model
     */

    async ModelHistory() {
        return await new Promise(async (resolve, reject) => {
            try {
                /**
                 * Defined model for instance of Schema Model
                 * @type {mongoose.Model}
                 */
                let HistoryModel = new this.HistoryModel({
                    name: String,
                    history: String,
                    photoURI: String
                })

                resolve({ HistoryModel })
            } catch (error) {
                reject(error)
            }
        })
    }

}

module.exports = {
    HistoyModelSchema: new HistoryModel(),
    ModelWithoutClass: model('history', HistorySchema)
}