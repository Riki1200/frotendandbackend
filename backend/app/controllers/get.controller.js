const { HistoyModelSchema } = require('../model/model.history');



function GetHistory() {
    return new Promise((resolve, reject) => {
        HistoyModelSchema.ModelHistory().then(async ModelHistory => {
            ModelHistory.find((err, doc) => {

                if (err) reject({ err })
                if (doc.length > 0)
                    resolve(doc)
                else
                    reject({ msg: "Not match results found" })
            })

        }).catch(reject)

    })
}

function GetHistoryId(id) {
    return new Promise((resolve, reject) => {

        HistoyModelSchema.ModelHistory().then(async ModelPerId => {
            ModelPerId.findById({ _id: id }, (err, dc) => {
                if (err) reject(err)
                resolve(dc);
            })
        }).catch(reject)
    })
}



module.exports = {
    GetHistoryId,
    GetHistory
};



