const mysql = require('mysql2')
const connectDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'express_mysql_2',
})

connectDb.connect((err) => {
    if (err) {
        console.error(err)
    }
    else { 
        console.log('database connect !!! ')
    }
})

module.exports = connectDb