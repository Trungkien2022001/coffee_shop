const express = require('express')
const { login, register } = require('../components/auth/authController')
const route = express.Router()

route.post('/login', login)
route.post('/register', register)
module.exports = route