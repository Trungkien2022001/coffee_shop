const execQuery = require("../../models")
const jwt = require('jsonwebtoken')

async function fetchLogin(req, res){
    const username = req.body ? req.body.username : ''
    const password = req.body ? req.body.password : ''
    const result = await execQuery(`select * from user where username = '${username}'`)
    if(result.length == 0) return{
        err: true,
        message: "Username khong ton tai",
    }
    console.log(result[0].password)
    if(password == result[0].password){
        const accessToken = jwt.sign({ user: username }, "geriudfnjcweiksdv,woie3fw2efwe235@#%")
        await execQuery(`update user set token = '${accessToken}' where username = '${username}'`)
        result[0].token = accessToken
    } else return {
        err: true,
        message: "Sai username hoac mat khau"
    }
    return{
        err:false,
        message:"Dang nhap thanh cong",
        data: result,
    }
}
async function fetchRegister(req, res){
    const username = req.body ? req.body.username : ''
    const name = req.body ? req.body.name : ''
    const phone = req.body ? req.body.phone : ''
    const email = req.body ? req.body.email : ''
    const password = req.body ? req.body.password : ''
    const address = req.body ? req.body.address : ''
    let result = await execQuery(`select * from user where username = '${username}'`)
    if(result.length > 0) return{
        err: true,
        message: " Da ton tai username"
    }
    result = await execQuery(`select * from user where email = '${email}'`)
    if(result.length > 0) return{
        err: true,
        message: " Da ton tai email"
    }
    result = await execQuery(`insert into user (name, username, password, phone, email, address) value('${name}', '${username}','${password}','${phone}','${email}','${address}')`)
    if(!result) return{
        err: true,
        message: " Co loi"
    }
    return {
        err: false,
        message: "Dang ky tai khoan thanh cong"
    }
}
module.exports ={
    fetchLogin,
    fetchRegister
}