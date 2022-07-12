const { errorResponse, successResponse } = require("../../../helper/responseMessage")
const { fetchGetAllOrder, fetchGetOrder, fetchCreateOrder, fetchUpdateOrder, fetchDeleteOrder } = require("./orderSevice")

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

module.exports = {
    getAllOrder,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,

}