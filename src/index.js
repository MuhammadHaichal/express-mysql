const express = require('express')
const app = express()
const users = require('./routes/users')

app.use('/users', users)

app.listen(4000, () => {
    console.log('server running !!!')
})