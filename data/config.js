const mysql = require("mysql2")
const util = require("util")

const pool = mysql.createPool({
    host: process.env.db_host,
    database: process.env.db_name,
    user: process.env.db_user
})

pool.getConnection((err)=>{
        err ? console.warn ("NO conectado", {"error": err.mesage}) : console.log("Conexión con B.D establecida")
    })


pool.query = util.promisify(pool.query)
module.exports = pool