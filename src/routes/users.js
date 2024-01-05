const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const { readData, createData,  updateData }  = require('../controller/users')

// BODY-PARSER SETUP    
const bodyJson = bodyParser.json()


// READ
router.get('/read', readData)

// CREATE 
router.post('/create', bodyJson, createData)

// UPDATE
router.patch('/update/:id', bodyJson, updateData)


module.exports = router;