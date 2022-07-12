const { errorResponse, successResponse } = require("../../helper/responseMessage")
const { fetchGetAllOrder, fetchGetOrder, fetchCreateOrder, fetchUpdateOrder, fetchDeleteOrder, fetchGetAllMenu, fetchMenu, fetchCreateMenu, fetchUpdateMenu, fetchDeleteMenu, fetchEquipment, fetchCreateEquipment, fetchUpdateEquipment, fetchDeleteEquipment, fetchGetAllEquipment } = require("./adminService")

async function getAllOrder(req, res){
    const result = await fetchGetAllOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function getOrder(req, res){
    const result = await fetchGetOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    return res.status(200).end(successResponse(result))
}
async function createOrder(req, res){
    const result = await fetchCreateOrder(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function updateOrder(req, res){
    const result = await fetchUpdateOrder(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function deleteOrder(req, res){
    const result = await fetchDeleteOrder(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function getAllMenu(req, res){
    const result = await fetchGetAllMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function getMenu(req, res){
    const result = await fetchMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function createMenu(req, res){
    const result = await fetchCreateMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function updateMenu(req, res){
    const result = await fetchUpdateMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function deleteMenu(req, res){
    const result = await fetchDeleteMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function getAllEquipment(req, res){
    const result = await fetchGetAllEquipment(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function getEquipment(req, res){
    const result = await fetchEquipment(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function createEquipment(req, res){
    const result = await fetchCreateEquipment(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function updateEquipment(req, res){
    const result = await fetchUpdateEquipment(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
async function deleteEquipment(req, res){
    const result = await fetchDeleteEquipment(req, res)
    if(result.edd) res.end(errorResponse(result))
    res.status(200).end(successResponse(result))
}
module.exports = {
    getAllOrder,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    getAllMenu,
    getMenu,
    createMenu,
    updateMenu,
    deleteMenu,
    getAllEquipment,
    getEquipment,
    createEquipment,
    updateEquipment,
    deleteEquipment
}