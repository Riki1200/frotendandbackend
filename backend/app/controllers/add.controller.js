const { DBModel } = require('../model/model.user');
const path = require('path');




const DBUserModel = new DBModel();


function Add({ name, month, day, year, history, url }) {
    return new Promise((resolve, reject) => {

        DBUserModel.AddDataByDataBase([]).then(_ => {
            resolve(_)
        }).catch(_error => {

            reject(_error)
        })

    })

}
module.exports = Add;
