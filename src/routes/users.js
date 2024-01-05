const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const { readData, createData }  = require('../controller/users')

// BODY-PARSER SETUP    
const bodyJson = bodyParser.json()


// READ
router.get('/', readData)

// CREATE 
router.post('/register', bodyJson, createData)

module.exports = router;