const mysql = require('mysql2')
const sequelize = require('sequelize')

// hubungkan database 
const connectDb = new sequelize('express_mysql_2', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql'
})

connectDb.authenticate(() => console.log('connected to database !'))


module.exports = connectDb
