const express = require('express')
const router = express.Router()

const { readData }  = require('../controller/users')

// READ
router.get('/', readData)

module.exports = router;