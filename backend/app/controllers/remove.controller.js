const DBModel = require('../model/model.user');


/**
 * Delete method router for API
 * @param {array} id 
 * @function Promise
 */

function DeletedHistory(id) {
    return new Promise((resolve, reject) => {
        let sql = 'DELETE FROM Users WHERE rowid = ?';
        DBModel.DeletedDataByDataBase(sql, [id]).then(_ => {
            resolve(_)
        }).catch(_error => {
            reject(_error);
        })

    })
};

module.exports = {
    DeletedHistory
};