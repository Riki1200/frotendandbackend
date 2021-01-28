
const { DBModel, UserModel } = require('../model/model.user')

const { encryptePass, descrytePass } = require('../utils/hash');





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
        console.log(r)
        UserModel.find({ email: regxEmail }, (err, user) => {

            if (err) {
                reject(err)
            }
            else {
                let passwordHash = user[0]['password']
                console.log(descrytePass(r, password), passwordHash)
                if (descrytePass(r, passwordHash)) {
                    console.log(user)
                    resolve(user)
                } else {
                    reject({ msg: "passowrd is wrong" })
                }

            }
        })


    })

}

module.exports = {
    AddUser,
    LoginUser
}
