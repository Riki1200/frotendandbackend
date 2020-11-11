const DBModel = require('../model/model.user');
const path = require('path');


const db_path = (path.dirname(__dirname) + '/db/Users.sqlite');
let DB = new DBModel(db_path);
function GetHistory() {
    return new Promise((resolve, reject) => {
        let sql = `SELECT (rowid),* FROM Users`;
        DB.GetDataByDataBase(sql).then((value) => {
            resolve(value);
        }).catch((_error) => {
            reject(_error);
        })
    })
}

function GetHistoryId(id) {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM Users where rowid = ?';
        DB.GetDataByDataBase(sql, [id]).then((value) => {
            resolve(value);
        }).catch((_error) => {
            reject(_error);
        })
    })
}



module.exports = {
    GetHistoryId,
    GetHistory
};
