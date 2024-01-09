const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
<<<<<<< HEAD

=======
const { readUsers, createUsers, updateUsers, deleteUsers }  = require('../controller/users')
>>>>>>> dev

// BODY-PARSER SETUP    
const bodyJson = bodyParser.json()


// READ
<<<<<<< HEAD

router.post('/search', searchUser)
=======
router.get('/read', readUsers)
>>>>>>> dev

// CREATE 
router.post('/create', bodyJson, createUsers)

// UPDATE
router.patch('/update/:id', bodyJson, updateUsers)

<<<<<<< HEAD
// DELETE

=======
// DELETE 
router.delete('/delete/:id', deleteUsers)
>>>>>>> dev

module.exports = router;
