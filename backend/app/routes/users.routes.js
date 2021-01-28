const express = require("express");
const jsonwebtoken = require('jsonwebtoken');
const { AddUser, LoginUser } = require("../controllers/users.controllers");
const AuthMiddleware = require('../middleware/auth.middleware');

const addUser = express.Router({ caseSensitive: true });

addUser.post("/api/register", async function (req, res) {
    let { name, password, email, birthdate } = req.body;
    console.log(name, password, email, birthdate)
    try {
        if (name && password && email && birthdate) {
            let birthdatePost = {
                day: day,
                month: month,
                year: year
            }

            let UserPOST = {
                name: name,
                password: password,
                email: email,
                birthdate: birthdatePost
            }



            AddUser(UserPOST).then(response => {
                res.json({ ...response });
            }).catch((msg) => {
                console.log(msg)
                res.status(401).json({ ...msg });
            })

        }

    } catch (error) {
        res.status(404).json(error);
    }




});


addUser.post("/api/login", (req, res) => {
    let { email, password } = req.body;


    if (email && password) {
        let user = {
            email: email,
            password: password
        }
        let jwtSign = jsonwebtoken.sign({ user }, process.env.TOKEN);
        res.json({ access_token: jwtSign })
    }
})

addUser.get('/api/login', AuthMiddleware, (req, res) => {

    let { email, password } = req.user.user;

    if (email && password) {

        let user = { email: email, password: password }
        LoginUser(user).then((response) => {

            res.json({ response })
        }).catch(error => {

            res.json({ error })
        })


    }





})

module.exports = addUser;
