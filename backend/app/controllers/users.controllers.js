const { hashSync } = require('bcrypt');
const { Model } = require('mongoose');
const { DBModel } = require('../model/model.user')

const { encryptePass, descrytePass } = require('../utils/hash');



let DB = new DBModel();



/**
 * 
 * @param {String} name
 * @param {String} email
 * @param {String} password
 * @param {Object} birthdate
 * @returns {Promise<object>} RegisterUser []
 */

function AddUser({ name, email, password, birthdate }) {
    return new Promise(async (resolve, reject) => {


        let hashPassword = encryptePass(password)

        let UserRegister = {
            username: name,
            password: hashPassword,
            email: email,
            birthdate: birthdate
        }

        console.log(UserRegister)



        DB.UserDataByDataBase().then((UsersRegister) => {

            /**
             * @type {Model} UsersModelRegister
             */
            let UsersModelRegister = new UsersRegister.UserModel(UserRegister)

            UsersModelRegister.save().then((res) => {
                if (res) resolve({ msg: "User register success" });
            }).catch((error) => {
                reject({ msg: "User exits", error })
            })

        }).catch((error) => {

            reject(error);
        })
    });
}
/**
 * 
 * @param {String} email 
 * @returns {Promise<object>}
 */

function LoginUser({ email, password }) {
    return new Promise((resolve, reject) => {
        let regxEmail = new RegExp(email, "gi");
        /**
         * @type {String}
         */
        let r = password;

        DB.UsersModel.find({ email: regxEmail }, (err, user) => {
            if (err !== null) {
                return reject(err)
            }

            /**
             * Password hash wich give MongoDB User Model
             * @type {String}
             */
            let passwordHash = user[0].password

            console.log(user)

            if (descrytePass(r, passwordHash)) {
                /**
                 * @type {object}
                 */
                resolve({
                    username: user[0].username,
                    email: hashSync(user[0].email, 20)
                })
            } else {
                reject({ msg: "Password value is void. Please insert valid value" })
                reject({ msg: "The passowrd is wrong" })
            }





        })


    })

}

module.exports = {
    AddUser,
    LoginUser
}
