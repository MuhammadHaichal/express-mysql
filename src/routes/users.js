const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()

const { readUsers, createUsers, updateUsers, deleteUsers }  = require('../controller/users')


// BODY-PARSER SETUP    
const bodyJson = bodyParser.json()


// READ
router.get('/read', readUsers)

// SEARCH USERS -- COMMING SOON
router.post('/search', searchUser)

// CREATE 
router.post('/create', bodyJson, createUsers)

// UPDATE
router.patch('/update/:id', bodyJson, updateUsers)

// DELETE 
router.delete('/delete/:id', deleteUsers)


module.exports = router;
