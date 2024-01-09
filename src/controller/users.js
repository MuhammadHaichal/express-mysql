const models = require('../models/users')
const db = require('../config/database')



// READ
const readData = (req, res) => {
  db.query(models.getAllUsers(), (err, rows) => {
    if (err) {
      res.status(500).json({
        statusCode: 500,
        message: 'internal server error',
        serverMessage: err //  DEV
      })
    }
    res.status(200).json({
      statusCode: 200,
      message: "readData users",
      data: rows
    })
  })
}

const searchUser = (req, res) => {
  res.json({
      message: 'ok'
  })
}

// CREATE 
const createData = (req, res) => {

  if (!req.body.nama || !req.body.umur || req.body.address || req.body.noTelpone) {
    res.status(400).json({
      statusCode: 400,
      message: 'invalid data !!!'
    })
  }

  else {

    db.query(models.createUsers(req.body), (err, rows) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          message: 'failed create users !!!',
          serverMessage: err //  DEV
        })
      }

      res.status(201).json({
        statusCode: 201,
        message: 'success creating users !!!',
        rows: rows.affectedRows,
        insertId: rows.insertId
      })
    })
  }
}


// UPDATE 
const updateData = (req, res) => {

  if (!req.body.nama || !req.body.umur || req.body.address || req.body.noTelpone) {
    res.status(400).json({
      statusCode: 400,
      message: 'invalid data !!!'
    })
  }

  else {
    db.query(models.updateUsers(req.body, req.params.id), (err, rows) => {

      if (err) {
        res.status(500).json({
          statusCode: 500,
          message: 'failed update users !!!',
          serverMessage: err //  DEV
        })
      }

      res.status(200).json({
        statuscode: 200,
        message: 'success update users !!!'
      })
    })
  }
}

// DELETE
const deleteData = (req, res) => {
  db.query(models.deleteUsers(req.params.id), (err, rows) => {
    if (err) {
      res.status(500).json({
        statusCode: 500,
        messageServer: err,
      })
    }

    res.json({
      statusCode: 200,
      message: 'success delete users !!!',
      rows: rows
    })
  })
}

module.exports = {
  readData,
  searchUser,
  createData,
  updateData,
  deleteData
}
