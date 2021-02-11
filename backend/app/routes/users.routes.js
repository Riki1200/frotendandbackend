const express = require("express");
const jsonwebtoken = require('jsonwebtoken');
const { AddUser, LoginUser } = require("../controllers/users.controllers");
const { UserModel } = require('../model/model.user');
const AuthMiddleware = require('../middleware/auth.middleware');

const addUser = express.Router({ caseSensitive: true });


let RefeshTokens = [];

//Register

addUser.post("/api/register", async function (req, res) {


    try {
        let { name, password, email, birthdate } = req.body;
        if (name && password && email && birthdate) {

            let UserPOST = {
                name: name,
                password: password,
                email: email,
                birthdate: birthdate
            }



            AddUser(UserPOST).then(response => {
                res.status(201).json({ response });
            }).catch((_msg) => {

                res.status(409).json({ msg: "User exists" });
            })

        }

    } catch (error) {
        console.log(error)
        res.status(404).json(error);
    } finally {
        console.info('Not created')
    }




});


addUser.post('/api/token', (req, res) => {

    const refreshToken = req.body.refreshToken
    if (refreshToken === null) {
        return res.sendStatus(401);

    }
    if (!RefeshTokens.includes(refreshToken)) {
        return res.sendStatus(403)
    }
    jsonwebtoken.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
        if (err) {
            return res.sendStatus(401)
        }
        const acessToken = AccessToken(user)
        res.json({ access_token: acessToken });
    })

})
addUser.post("/api/login", (req, res) => {
    let { email, password } = req.body;


    if (email && password) {
        let userAccount = {
            email: email,
            password: password
        }
        try {
            let SearchEmail = new RegExp(email, 'gi')
            UserModel.find({ email: SearchEmail }, (err, user) => {

                if (err !== null) {

                    return res.sendStatus(401).json(
                        { msg: err }
                    )
                } else {
                    if (user.length > 0) {

                        let jwtSign = AccessToken(userAccount);
                        let refreshToken = jsonwebtoken.sign({ userAccount }, process.env.REFRESH_TOKEN)


                        RefeshTokens.push(refreshToken);

                        return res.json({ access_token: jwtSign, refresh_token: refreshToken })
                    }

                    res.json({ msg: "User not found. Please, created account" })

                }



            })
        } catch (error) {
            console.log('ERROR')
        }


    }
})
    .get('/api/login', AuthMiddleware, (req, res) => {
        let { email, password } = req.user.user;
        let { refresh_token } = req.body.refresh_token;
        if (email && password && refresh_token) {

            let user = {
                email: email,
                password: password
            }

            console.log(user)


            LoginUser(user).then((response) => {

                res.status(200).json({
                    user: response,
                    dateExpire: Date.now() + 266000,
                    token: refresh_token
                })
            }).catch(error => {
                console.log(error)
                res.json(error)
            })





        }



    })




/**
 * 
 * @param {object} user 
 * @returns {String}
 */
function AccessToken(user) {
    return jsonwebtoken.sign({ user }, process.env.TOKEN,
        {
            expiresIn: "1h",
            algorithm: "HS512"
        })
}

module.exports = addUser;
