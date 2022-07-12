
const express = require("express")
require('dotenv').config
const PORT = 1234
const app = express()

const cors = require('cors')

app.use(express.json())

app.listen(PORT,(req, res)=>{
    console.log(`App is listening on port ${PORT}`)
})

