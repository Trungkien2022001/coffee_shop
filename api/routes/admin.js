const express = require('express')
const { getAllOrder, getOrder, createOrder } = require('../components/admin/adminControllers')
const route = express.Router()

route.get('/admin/getOrders', getAllOrder)
route.get('/admin/get_order', getOrder)
route.post('/admin/create_order', createOrder)
module.exports = route