

const { DBModel } = require('../model/model.user');




const DB = new DBModel();



function UpdateController(data) {

    return new Promise((resolve, reject) => {
        let sqlOne = 'UPDATE Users SET (title, history, date, url) = (?,?,?,?) WHERE rowid = ?'
        console.log(...data)
        DB.UpdateDataByDataBase(sqlOne, [...data]).then(r => {

            resolve(r);
        }).catch(e => {
            reject(e);
        })


    })


}


module.exports = UpdateController;

