const { errorResponse, successResponse } = require("../../../helper/responseMessage")
const { fetchGetAllMenu, fetchMenu, fetchCreateMenu, fetchUpdateMenu, fetchDeleteMenu } = require("./menuService")

async function getAllMenu(req, res){
    const result = await fetchGetAllMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function getMenu(req, res){
    const result = await fetchMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function createMenu(req, res){
    const result = await fetchCreateMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function updateMenu(req, res){
    const result = await fetchUpdateMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function deleteMenu(req, res){
    const result = await fetchDeleteMenu(req, res)
    if(result.edd) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
module.exports = {
    getAllMenu,
    getMenu,
    createMenu,
    updateMenu,
    deleteMenu,
}