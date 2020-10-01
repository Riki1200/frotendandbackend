const express = require("express");
const { AddUser, LoginUser } = require("../controllers/users.controllers");

let addUser = express.Router({ caseSensitive: true });

addUser.post("/api/register", function (req, res) {
    let { name, password, email, date } = req.body;


    if (name !== undefined
        && password !== undefined
        && email !== undefined
        && date !== undefined) {
        AddUser(req.body).then(response => {
            res.json({ msg: "User created sucesss", value: response });
        }).catch(error => {
            res.status(400).json({ error, value: false });
            console.log(error)
        })
    }


});
addUser.post("/api/login", (req, res) => {
    let { email, password } = req.body;
    if (email && password) {
        LoginUser(req.body).then(resp => {
            if (resp) {
                res.json({ msg: "Login sucess", value: resp });
            } else {
                res.json({ msg: "Wrong user", value: resp });
            }
        }).catch(error => {
            console.log(error)
        })
    }
});

module.exports = addUser;
