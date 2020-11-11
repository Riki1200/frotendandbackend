const DBModel = require('../model/model.user');
const path = require('path');


const db_path = (path.dirname(__dirname) + '/db/Users.sqlite');
let DB = new DBModel(db_path);
function Add({ name, month, day, year, history, url }) {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO Users(title,history,date,url) VALUES (?, ?, ?, ?)    `;
        DB.AddDataByDataBase(sql, [name, history, `${day}/${month}/${year}`, `${url}`]).then(_ => {
            resolve(_)
        }).catch(_error => {

            reject(_error)
        })

    })

}
module.exports = Add;
