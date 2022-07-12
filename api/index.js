
const express = require("express")
require('dotenv').config
const adminRoute = require('./routes/admin')
const PORT = 1234
const app = express()

const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/', adminRoute)

app.listen(PORT,(req, res)=>{
    console.log(`App is listening on port ${PORT}`)
})

