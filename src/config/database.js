const mysql = require('mysql2')
const sequelize = require('sequelize')

// hubungkan database 
const connectDb = new sequelize('express_mysql_2', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql'
})

<<<<<<< HEAD
=======
connectDb.authenticate(() => console.log('connected to database !'))


>>>>>>> dev
module.exports = connectDb
