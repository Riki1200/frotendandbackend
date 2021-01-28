
const Mongoose = require('mongoose');

const connect = require('../db/dbConfig');

let { Schema, model, Types } = Mongoose;






const UserSchema = new Schema({
    _id: {
        type: Types.ObjectId,
        auto: true,
        required: true,

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    birthdate: {
        type: Object,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "users"
})

/**
 * Class for te define model
 */

class DBModel {

    /**
     * propiedad
     * @property UserModels
     */

    UsersModel = null;

    /**
     * Constucotor class
     * @constructor
     * 
     */

    constructor() {
        Mongoose.connection.once('open', () => {
            connect.then(() => {
                console.log("Connectes it's sucess")
            }).catch(error => {
                let err = new Error(error)
                console.error(err)
            })
        })

        this.UsersModel = model('Users', UserSchema)


    }

    async UserDataByDataBase({ username, password, email, birthdate }) {
        return await new Promise(async (resolve, reject) => {

            try {
                /**
                 * Instance for model
                * @type {Mongoose.Model} UsersModelRegister
                */
                const UsersModelRegister = new this.UsersModel({
                    username: username,
                    password: password,
                    email: email,
                    birthdate: birthdate
                })


                resolve({ UsersModelRegister });

            } catch (error) {
                reject(error)
            }



        });
    }

}

module.exports = {
    DBModel,
    UserModel: model('Users', UserSchema)
};
