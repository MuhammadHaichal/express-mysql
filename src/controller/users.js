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
            statusCode: res.status,
            message: "readData",
            data: rows
        })
    })
}

// CREATE 
const createData = (req, res) => {
    console.log(req.body)
    db.query(models.createUsers(req.body), (err, rows) => {
        if (err) {
            res.status(500).json({
                message: 'internal server error',
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


module.exports = {
    readData,
    createData
}