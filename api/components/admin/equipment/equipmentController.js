const { successResponse, errorResponse } = require("../../../helper/responseMessage")
const { fetchGetAllEquipment, fetchEquipment, fetchCreateEquipment, fetchUpdateEquipment, fetchDeleteEquipment } = require("./equipmentService")

async function getAllEquipment(req, res){
    const result = await fetchGetAllEquipment(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function getEquipment(req, res){
    const result = await fetchEquipment(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function createEquipment(req, res){
    const result = await fetchCreateEquipment(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function updateEquipment(req, res){
    const result = await fetchUpdateEquipment(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function deleteEquipment(req, res){
    const result = await fetchDeleteEquipment(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
module.exports ={
    getAllEquipment,
    getEquipment,
    createEquipment,
    updateEquipment,
    deleteEquipment
}