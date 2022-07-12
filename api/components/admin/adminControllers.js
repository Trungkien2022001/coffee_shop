const { errorResponse, successResponse } = require("../../helper/responseMessage")
const { fetchGetAllOrder, fetchGetOrder, fetchCreateOrder } = require("./adminService")

async function getAllOrder(req, res){
    const result = await fetchGetAllOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    res.end(successResponse(result))
}
async function getOrder(req, res){
    const result = await fetchGetOrder(req, res)
    if(result.err) res.end(errorResponse(result))
    return res.end(successResponse(result))
}
async function createOrder(req, res){
    const result = await fetchCreateOrder(req, res)
    res.end("hello")
}
module.exports = {
    getAllOrder,
    getOrder,
    createOrder
}