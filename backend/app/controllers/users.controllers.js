const { DBModel, UserModel } = require('../model/model.user')

const { encryptePass, descrytePass } = require('../utils/hash');



let DB = new DBModel();



/**
 * @param {object} User
 * @param {String} User.name
 * @param {String} User.email
 * @param {String} User.password
 * @param {object} User.birthdate
 * @param {number} User.birthdate.day
 * @param {string} User.birthdate.month
 * @param {number} User.birthdate.year
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





        DB.UserDataByDataBase().then((UsersRegister) => {


            /**
             * 
             * @type {import('mongoose').Model} UsersModelRegister
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
 * @param {object} User Object Destrcturing
 * @param {string} User.email Email field
 * @param {string} User.password Password field
 * @returns {Promise<Array<object>>}
 */

function LoginUser({ email, password }) {
    return new Promise((resolve, reject) => {
        let emailValidator = new RegExp(email, "gi");
        /**
         * Password recived from client
         * @type {String}
         */
        let passwordInput = password;
        UserModel.find({ email: emailValidator }, function (err, user) {
            if (err) reject(err)
            /**
             * Password hash wich give MongoDB User Model
             * @type {String}
             */
            let passwordHash = user[0].password

            if (descrytePass(passwordInput, passwordHash)) {
                /**
                 * @type {object}
                 */
                resolve({
                    username: user[0].username,
                    email: user[0].email,
                    dateExpire: Date.now() + 800000
                })

            } else {
                reject({ msg: "The password is incorrect! Please, insert correct password" })

            }
        });
    })
}

module.exports = {
    AddUser,
    LoginUser
}
