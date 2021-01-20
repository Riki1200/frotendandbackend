const express = require("express");
const jsonwebtoken = require('jsonwebtoken');
const { AddUser, LoginUser } = require("../controllers/users.controllers");
const AuthMiddleware = require('../middleware/auth.middleware');
let addUser = express.Router({ caseSensitive: true });

addUser.post("/api/register", async function (req, res) {
    let { name, password, email, day, month, year } = req.body;


    let birthdate = {
        day: day,
        month: month,
        year: year
    }

    let UserPOST = {
        name: name,
        password: password,
        email: email,
        birthdate: birthdate
    }


    try {
        AddUser(UserPOST).then(response => {
            res.json({ ...response });
        }).catch((msg) => {
            console.log(msg)
            res.status(401).json({ ...msg });
        })
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
        let jwtSign = jsonwebtoken.sign({ user }, process.env.TOKEN)
        LoginUser({ email, password }).then((response) => {

            res.json({ acess_token: jwtSign })
        }).catch(error => {
            console.log(error)
        })




    }






}).get('/api/:login', AuthMiddleware, (req, res) => {
    if (email && password) {
        LoginUser({ email, password }).then((response) => {

            res.json({ acess_token: jwtSign })
        }).catch(error => {
            console.log(error)
        })
    }
})

module.exports = addUser;
