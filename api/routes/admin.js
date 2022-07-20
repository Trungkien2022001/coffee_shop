const express = require('express')
const { getAllEquipment, getEquipment, createEquipment, updateEquipment, deleteEquipment } = require('../components/admin/equipment/equipmentController')
const { getAllMenu, getMenu, createMenu, updateMenu, deleteMenu, createMenus } = require('../components/admin/menu/menuController')
const { getAllOrder, getOrder, createOrder, updateOrder, deleteOrder, getUserOrder } = require('../components/admin/order/orderController')
const { getAllUser, deleteUser, getAllInfo, LoginHistory, getLoginHistory } = require('../components/admin/user/userController')
const { login, register } = require('../components/auth/authController')
const { authenticate } = require('../middlewares/auth')
const { productCache, homeCache } = require('../middlewares/cache')
const route = express.Router()

route.get('/admin/getOrders',authenticate, getAllOrder)
route.get('/admin/getuserorder', getUserOrder)
route.get('/admin/get_order', getOrder)
route.post('/admin/create_order', createOrder)
route.put('/admin/update_order', updateOrder)
route.delete('/admin/delete_order',authenticate, deleteOrder)
route.get('/admin/getMenus',homeCache, getAllMenu)
route.get('/admin/getmenu',productCache, getMenu)
route.post('/admin/create_menu', createMenu)
route.post('/admin/create_menus', createMenus)
route.put('/admin/update_menu', updateMenu)
route.delete('/admin/delete_menu', deleteMenu)
route.get('/admin/getEquipments', getAllEquipment)
route.get('/admin/get_equipment', getEquipment)
route.post('/admin/create_equipment', createEquipment)
route.put('/admin/update_equipment', updateEquipment)
route.delete('/admin/delete_equipment', deleteEquipment)
route.post('/admin/login', login)
route.post('/admin/register', register)
route.get('/admin/getUsers', getAllUser)
route.get('/admin/getInfo', getAllInfo)
route.delete('/admin/delete_user', deleteUser)
route.post('/admin/loginhistory', LoginHistory)
route.get('/admin/getloginhistory', getLoginHistory)
module.exports = route
