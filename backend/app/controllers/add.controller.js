const DBModel = require('../model/model.user');
const path = require('path');


const db_path = (__dirname.replace('/controllers', '') + '/db/Users.sqlite');
let DB = new DBModel(db_path);
function Add({ title, type, history, date }) {
    let sql = `INSERT INTO Users(title,type,history,created_at) VALUES (?, ?, ?, ?)`;
    return DB.AddDataByDataBase(sql, [title, type, history, date]);
}

module.exports = {
    Add
}