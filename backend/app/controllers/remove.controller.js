const { ModelWithoutClass } = require('../model/model.history');


/**
 * Delete method router for API
 * @param {number} id 
 * @function Promise
 */

function DeletedHistory(id) {
    return new Promise((resolve, reject) => {
        ModelWithoutClass.findOneAndDelete({ _id: id }, (err, doc) => {
            console.log(err)
            if (err) reject(err)
            console.log(doc)
            resolve(doc)
        })

    })
};

module.exports = {
    DeletedHistory
};