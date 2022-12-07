const { Sequelize } = require("sequelize");
const configEnv = require("../config");

const db = new Sequelize({
    dialect : 'postgres',
    host : configEnv.db.host,
    username : configEnv.db.username,
    password : configEnv.db.password,
    database : configEnv.db.dbName
})

module.exports = db
