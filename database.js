const mysql = require('mysql')
const keys = require('./config').mysqlAuth

const conn = mysql.createConnection({
    host: keys.host,
    user: keys.user,
    password: keys.pass,
    database: keys.db
})

module.exports = conn

