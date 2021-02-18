

const { ModelWithoutClass } = require('../model/model.history');





/**
 * @param {Request} body
 */
function UpdateController(body, id_param) {

    return new Promise((resolve, reject) => {

        if (body.name !== "" && body.url !== "" && body.history !== "") {

            ModelWithoutClass.findOneAndReplace(id_param, {
                name: body.name,
                history: body.history,
                photoURI: body.url
            }, { upsert: true }, (err, doc) => {
                console.log(err)
                if (err) reject(err)
                if (doc) {
                    console.log(doc)
                    resolve({ msg: "UPDATE SUCESS" })
                } else {
                    reject({ msg: "The user not should update" })
                }
            })
        } else {
            reject({ msg: "Values is void" })
        }




    })


}


module.exports = UpdateController;

