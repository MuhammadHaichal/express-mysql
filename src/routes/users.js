const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const { readData, searchUser, createData,  updateData, deleteData }  = require('../controller/users')

// BODY-PARSER SETUP    
const bodyJson = bodyParser.json()


// READ
router.get('/read', readData)
router.post('/search', searchUser)

// CREATE 
router.post('/create', bodyJson, createData)

// UPDATE
router.patch('/update/:id', bodyJson, updateData)

// DELETE
router.delete('/delete/:id', deleteData)

module.exports = router;
