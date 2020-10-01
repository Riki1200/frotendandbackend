const sqlite3 = require("sqlite3");

const sqlite = sqlite3.verbose();

let historyUsers = `CREATE TABLE IF NOT EXISTS Users(
                id_history INTEGER not null,
                title VARCHAR NOT NULL,
                type VARCHAR NOT NULL,
                history VARCHAR NOT NULL,
                date VARCHAR NOT NULL,
                FOREIGN KEY(id_history) references User(id)
            );`;

let adminUser = `CREATE TABLE IF NOT EXISTS User(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                password VARCHAR NOT NULL,
                date VARCHAR NOT NULL
);`;

let indexSql = `CREATE UNIQUE INDEX IF NOT EXISTS idx_email_user ON User (email)`;

class DBModel {
    constructor(dbpath) {
        this.db = new sqlite.Database(dbpath, sqlite3.OPEN_READWRITE, (error) => {
            if (error) console.error(error);
            console.log("Connected dataabaase is sucess");
        });

        this.db.serialize(() => {
            this.db.run(adminUser, function (err) {
                if (err) console.error(err);
                console.log("Table user for admin and session");
            });
            this.db.run(historyUsers, (err) => {
                if (err) console.error(err);
                console.info("Table created sucess");
            });
            this.db.run(indexSql, function (error) {
                if (error) {
                    console.error("Error is created index for table", error);
                }
                console.info("Indexed created is sucess");
            });

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
    6
    QueryDataByDataBase(sql, data = []) {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.all(sql, data, (error, row) => {
                    if (error) reject(error)
                    if (row.length > 0) resolve(true)
                    else resolve(false);
                });
            })

        });
    }

    AddDataByDataBase(sql, data = []) {
        let val = null;
        this.db.run(sql, data, (err) => {
            if (err) val += false;
            else val += true;
        });
        return val;
    }

    UpdateDataByDataBase(sql, data = []) {
        let val = null;
        this.db.run(sql, data, (err) => {
            if (err) val += false;
            else val += true;
        });
        return val;
    }

    DeletedDataByDataBase(sql, data = []) {
        let val = null;
        this.db.run(sql, data, (err) => {
            if (err) val += false;
        });
        return val;
    }
}

module.exports = DBModel;
