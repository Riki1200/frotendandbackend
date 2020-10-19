const DBModel = require('../model/model.user');
const path = require('path');


const db_path = (__dirname.replace('/controllers', '') + '/db/Users.sqlite');
let DB = new DBModel(db_path);
function Add(args) {
    let sql = `INSERT INTO Users(title,type,history,created_at) VALUES (?, ?, ?, ?)`;

    let { name, age, month, day, history, image_url } = args;

    return DB.AddDataByDataBase(sql, [title, type, history, date]);
}

module.exports = {
    Add
}