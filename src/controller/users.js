const models = require('../models/users')
const db = require('../config/database')

// READ
const readData = (req, res) => {
  db.query(models.getAllUsers(), (err, rows) => {
    if (err) {
      res.status(500).json({
        message: 'internal server error',
        serverMessage: err //  DEV
      })
    }
    res.status(200).json({
      message: "readData",
      data: rows
    })
  })
}


// CREATE 
const createData = (req, res) => {

  db.query(models.createUsers(req.body), (err, rows) => {
    if (err) {
      res.status(500).json({
        message: 'failed create users !!!',
        serverMessage: err //  DEV
      })
    }

    res.status(201).json({
      message: 'success creating users !!!',
      rows: rows.affectedRows,
      insertId: rows.insertId
    })
  })
}


// UPDATE 
const updateData = (req, res) => {
  db.query(models.updateUsers(req.body, req.params.id), (err, rows) => {
    if (err) {
      res.status(500).json({
        message: 'failed update users !!!',
        serverMessage: err //  DEV
      })
    }

    res.status(200).json({
      message: 'success update users !!!'
    })
  })

}

module.exports = {
  readData,
  createData,
  updateData
}
