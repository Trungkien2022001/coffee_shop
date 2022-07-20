const { errorResponse, successResponse } = require("../../../helper/responseMessage")
const { fetchGetAllOrder, fetchGetOrder, fetchCreateOrder, fetchUpdateOrder, fetchDeleteOrder, fetchGetUserOrder } = require("./orderSevice")

async function getAllOrder(req, res){
    const result = await fetchGetAllOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function getUserOrder(req, res){
    const result = await fetchGetUserOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function getOrder(req, res){
    const result = await fetchGetOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    else return res.status(200).end(successResponse(result))
}
async function createOrder(req, res){
    const result = await fetchCreateOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function updateOrder(req, res){
    const result = await fetchUpdateOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function deleteOrder(req, res){
    const result = await fetchDeleteOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}

module.exports = {
    getUserOrder,
    getAllOrder,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,

}