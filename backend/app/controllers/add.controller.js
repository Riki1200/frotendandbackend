const Mongoose = require('mongoose')
const { HistoyModelSchema } = require('../model/model.history');






/**
 * @param {object} history
 * @param {String} history.name
 * @param {String} history.history
 * @param {String} history.url
 * @returns {Promise<Mongoose.Model>} Add()
 */

function Add({ name, history, url }) {

    return new Promise((resolve, reject) => {

        HistoyModelSchema.ModelHistory().then(Model => {
            /**
             * Instance for model History 
            * @type {Mongoose.Model} SchemaDefine
            */
            let SchemaDefine = new Model({
                name: name,
                history: history,
                photoURI: url
            });
            SchemaDefine.save().then(() => {
                resolve({ msg: "Hisotoy add is success" })
            }).catch(() => {
                reject({ msg: "The history exists in the model" })
            })


        }).catch(reject)


    })

}
module.exports = Add;
