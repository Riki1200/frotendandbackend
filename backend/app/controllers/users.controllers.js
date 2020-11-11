const DBModel = require('../model/model.user')
const path = require('path');






const db_path = (path.dirname(__dirname) + '/db/Users.sqlite');

let DB = new DBModel(db_path);

function AddUser({ name, email, password, date }) {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO User(name,email,password,date) VALUES (?,?,?,?);`;
        DB.UserDataByDataBase(query, [name, email, password, date]).then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        })
    });
}


function LoginUser({ email, password }) {
    return new Promise((resolve, reject) => {
        let sql = `SELECT name FROM User WHERE email = ? AND password = ?;`;
        DB.QueryDataByDataBase(sql, [email, password]).then((res) => {
            resolve(res);
        }).catch(error => {
            reject(error);
        })
    })

}

module.exports = {
    AddUser,
    LoginUser
}
