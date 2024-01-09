const db  = require('../config/database')
const { DataTypes } = require('sequelize')

// CREATE TABLE   
const TableUsers = db.define('users', {
  'nama': {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  'umur': {
    type: DataTypes.INTEGER(2),
    allowNull: false
  },
  'address': {
    type: DataTypes.TEXT('medium'),
    allowNull: false
  },
  'noTelpone': {
    type: DataTypes.BIGINT,
    allowNull: false
  },
})

module.exports = TableUsers