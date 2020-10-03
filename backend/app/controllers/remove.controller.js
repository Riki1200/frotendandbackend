import DBModel, { sqlite } from '../model/model.user.js';


let DB = DBModel(__dirname + '/db/Users.sqlite');
const DBModel = require('../model/model.user');

const db_path = (__dirname.replace('/controllers', '') + '/db/Users.sqlite');