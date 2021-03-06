const { errorResponse, successResponse } = require("../../../helper/responseMessage")
const { fetchGetAllUser, fetchDeleteUser, fetchGetInfo, fetchLoginHistory, fetchGetLoginHistory } = require("./userSevice")

async function getAllUser(req, res){
    const result = await fetchGetAllUser(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function getAllInfo(req, res){
    const result = await fetchGetInfo(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}

async function deleteUser(req, res){
    const result = await fetchDeleteUser(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function LoginHistory(req, res){
    const result = await fetchLoginHistory(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}
async function getLoginHistory(req, res){
    const result = await fetchGetLoginHistory(req, res)
    if(result.err) res.end(errorResponse(result))
    else res.status(200).end(successResponse(result))
}

module.exports = {
    getAllUser,
    deleteUser,
    getLoginHistory,
    LoginHistory,
    getAllInfo

}