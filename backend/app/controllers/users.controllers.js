
const { DBModel, UserModel } = require('../model/model.user')

const { encryptePass, descrytePass } = require('../helpers/passwordhash.helper');





let DB = new DBModel();


console.log(DB.UsersModel)
/**
 * 
 * @param {String} name
 * @param {String} email
 * @param {String} password
 * @param {Object} birthdate
 * @returns {Promise} RegisterUser []
 */

function AddUser({ name, email, password, birthdate }) {
    return new Promise(async (resolve, reject) => {


        let hashePASS = encryptePass(password)

        let UserRegister = {
            username: name,
            password: hashePASS,
            email: email,
            birthdate: birthdate
        }
        console.log(UserRegister)



        DB.UserDataByDataBase(UserRegister).then(({ UsersModelRegister }) => {

            UsersModelRegister.save().then(() => {

                resolve({ msg: "User register success" });
            }).catch(() => {

                reject({ msg: "User exits" })
            })

        }).catch((error) => {
            reject(error);
        })
    });
}


function LoginUser({ email, password }) {
    return new Promise((resolve, reject) => {
        let regxEmail = new RegExp(email, "gi");
        let r = password;

        let UserAccess = {
            email: email,
            password: password,

        }

        UserModel.find({ "email": regxEmail }, (err, user) => {

            if (err) {
                reject(err)
            }
            else {
                let { password } = user[0]
                if (descrytePass(r, password)) {
                    resolve(user)
                }

            }
        })


    })

}

module.exports = {
    AddUser,
    LoginUser
}
