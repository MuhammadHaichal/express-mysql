const models = require('../models/users')
const db = require('../config/database')

// READ
const readData = (req,res) => {
    db.query(models.getAllUsers(), (err,result) => {
        if(err) {
            res.status(500).json({
                message: 'internal server error',
                serverMessage: err //  DEV
            })
        }
        res.status(200).json({
             message: "readData",
             data: result
        })
    })
}


module.exports = {
    readData
}