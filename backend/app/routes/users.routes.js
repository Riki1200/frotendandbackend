const express = require("express");
const jsonwebtoken = require('jsonwebtoken');
const AccessToken = require('../utils/token');
const { AddUser, LoginUser } = require("../controllers/users.controllers");
const { UserModel } = require('../model/model.user');
const AuthMiddleware = require('../middleware/auth.middleware');



/**
 * @type {express.Router}
 */
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
                res.status(201).json({ msg: response.msg });
            }).catch((_msg) => {
                console.log(_msg)
                res.status(409).json({ msg: "User exists" });
            })

        }

    } catch (error) {

        res.status(404).json(error);
    }




});


addUser.delete('/api/logout', function (req, res) {
    RefeshTokens = RefeshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
})


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


    +

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
                        return res.sendStatus(401).json({ err })
                    } else {
                        if (user.length > 0) {

                            let jwtSign = AccessToken(userAccount);
                            let refreshToken = jsonwebtoken.sign({ userAccount }, process.env.REFRESH_TOKEN)


                            RefeshTokens.push(refreshToken);

                            return res.json({ access_token: jwtSign, refresh_token: refreshToken })
                        }

                        res.json({ msg: "User not found. Please, created account", value: false })
                    }

                })
            } catch (error) {
                console.log('ERROR')
            }


        }
    }).get('/api/login', AuthMiddleware, (req, res) => {
        let { email, password } = req.user.user;

        if (email && password) {
            let user = {
                email: email,
                password: password
            }
            LoginUser(user).then((response) => {


                res.status(200).json({
                    user: {
                        username: response.username,
                        email: response.email,
                        dateExpire: response.dateExpire,
                        refreshToken: RefeshTokens[0]
                    },
                    value: false

                })




            }).catch(error => {
                console.log(error)
                res.status(403).json({ msg: error })
            })

        }



    })





module.exports = addUser;
