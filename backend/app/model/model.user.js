
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
     * @type {Mongoose.Model}
     */

    UsersModel = null;

    /**
     * Constucotor class
     * @constructor
     * 
     */

    constructor() {


        this.UsersModel = model('Users', UserSchema)


    }




    /**
     * @returns {Promise<Mongoose.Model}
     */
    async UserDataByDataBase() {
        return await new Promise(async (resolve, reject) => {

            try {
                /**
                 * Instance for model
                * @type {Mongoose.Model} UsersModelRegister
                */

                resolve({ UserModel: model('Users', UserSchema) });

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
