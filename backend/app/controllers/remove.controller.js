const DBModel = require('../model/model.user');
const path = require('path');
const db_path = (path.dirname(__dirname) + '/db/Users.sqlite');


const DB = new DBModel(db_path);

function DeletedHistory(id) {
    return new Promise((resolve, reject) => {
        let sql = 'DELETE FROM Users WHERE rowid = ?';
        DB.DeletedDataByDataBase(sql, [id]).then(_ => {
            resolve(_)
        }).catch(_error => {
            reject(_error);
        })

    })
};

module.exports = {
    DeletedHistory
};