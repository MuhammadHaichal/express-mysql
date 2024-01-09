const express = require('express')
const app = express()
const users = require('./routes/users')
const port = process.env.portServer || 4000 

app.use(express.json())
app.use('/users/api/v1/', users)


app.listen(port, () => {
    console.log('server running !!!')
})
