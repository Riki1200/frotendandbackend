const path = require('path');

const DBModel = require('../model/model.user');

const db_path = (path.dirname(__dirname) + '/db/Users.sqlite');


const DB = new DBModel(db_path);



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

