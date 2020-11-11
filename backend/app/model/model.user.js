const sqlite3 = require("sqlite3");



const sqlite = sqlite3.verbose();

let historyUsers = `CREATE TABLE IF NOT EXISTS Users(
                title VARCHAR NOT NULL,
                history VARCHAR NOT NULL,
                date VARCHAR(30) NOT NULL,
                url VARCHAR(255) NOT NULL,
                FOREIGN KEY(title) references User(id)
            );`;

let adminUser = `CREATE TABLE IF NOT EXISTS User(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                password VARCHAR NOT NULL,
                date VARCHAR NOT NULL
);`;

let indexSql = `CREATE UNIQUE INDEX IF NOT EXISTS idx_email_user ON User (email)`;
let historyIndex = `CREATE UNIQUE INDEX IF NOT EXISTs historyIndex ON Users(title)`;

class DBModel {

    constructor(dbpath) {
        this.db = new sqlite.Database(dbpath, sqlite3.OPEN_READWRITE, (error) => {
            if (error) console.error(error);
            console.log("The connected database is sucess");
        });

        this.db.serialize(() => {
            this.db.run(adminUser, function (err) {
                if (err) console.error(err);
                console.log("Table user for admin and session a created sucess");
            });
            this.db.run(historyUsers, (err) => {
                if (err) console.error(err);
                console.info("Table created sucess");
            });
            this.db.run(indexSql, function (error) {
                if (error) {
                    console.error("Error is created index for table", error);
                }
                console.info("Indexed created is sucess for user");
            });

            this.db.run(historyIndex, function (error) {
                if (error) {
                    console.error("Error is created index for table", error);
                }
                console.info("Indexed created is sucess for users");
            })

            process.on("SIGINT", () => {
                this.db.close((err) => {
                    if (err) console.error(err);
                    console.log("connection closed is suscess");
                });
            });
        });
    }

    UserDataByDataBase(sql, data = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, data, (error) => {
                if (error) {
                    reject({ error: error });
                } else {
                    resolve(true);
                }
            });
        });
    }

    GetDataByDataBase(sql, data = []) {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.all(sql, data, (err, row) => {
                    if (err) reject(err)
                    resolve(row);
                });
            });
        });
    }


    QueryDataByDataBase(sql, data = []) {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.all(sql, data, (error, row) => {
                    if (error) {
                        reject(error)
                    }
                    if (row.length > 0) {
                        resolve({ value: true })
                    }
                    else {
                        resolve({ value: false });
                    }
                });
            })

        });
    }

    AddDataByDataBase(sql, data = []) {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.run(sql, data, (err) => {
                    if (err) {
                        reject({ msg: err, value: false });
                        console.error(err)
                    } else {
                        resolve({ msg: 'History user created', value: true })
                    }

                });
            })

        })


    }

    UpdateDataByDataBase(sql, data = []) {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.run(sql, data, (err) => {
                    if (err) {
                        reject(err)
                        console.info(err)
                    }
                    else resolve({ msg: "History update sucess" });
                })


            })
        })
    }

    DeletedDataByDataBase(sql, data = []) {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.run(sql, data, (err) => {
                    if (err) reject(err);
                    resolve({ msg: "History deleted sucess" });
                })
            })
        })
    }
}

module.exports = DBModel;
