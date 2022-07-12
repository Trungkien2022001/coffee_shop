const execQuery = require("../../../models")

async function fetchGetAllEquipment(req, res){
    const result = await execQuery('select * from `equiment`')
    if (result.length == 0 ){
        return{
            err:true,
            message:"khong co du lieu ve thiet bi"
        }
    }
    return {
        err:false,
        data: result,
        message:"Lay danh sach thiet bi thanh cong"
    }
}
async function fetchEquipment(req, res){
    const id = req.query.id
    let result = await execQuery(`select * from \`equiment\` where id = ${id}`)
    if (result.length == 0 ){
        return{
            err:true,
            message:"Khong ton tai thiet bi"
        }
    }
    return {
        err:false,
        data: result,
        message:"Lay thong tin thiet bi thanh cong"
    }
}
async function fetchCreateEquipment(req, res){
    const name = req.body.name||'Ẩn danh'
    const quantity = req.body.quantity||1
    const year_of_manufacture = req.body.year_of_manufacture
    const status= req.body.status||"Còn dùng được"

    const check = await execQuery(`select * from equiment where name = '${name}'`)
    if(check.length > 0 ) return {
        err: true,
        message:" ten thiet bi nay da ton tai trong he thong"
    }
    const result = await execQuery(`insert into \`equiment\` (name, quantity, year_of_manufacture, status) values('${name}', ${quantity}, ${year_of_manufacture}, '${status}')`)
    if(result.length == 0 ){
        return{ 
            err: true,
            message:"them thiet bi loi"
        }
    }
    return{
        err: false,
        message:"Them thiet bi thanh cong",
        data: result
    }
 }
 async function fetchUpdateEquipment(req, res){
    const id = req.query.id
    const name = req.body.name||'Ẩn danh'
    const quantity = req.body.quantity||1
    const year_of_manufacture = req.body.year_of_manufacture
    const status= req.body.status||"Còn dùng được"
    const check1 = await execQuery(`select * from \`equiment\` where id = ${id}`)
    if(check1.length == 0){
        return {
            err: true,
            message:"Khong ton tai thiet bi"
        }
    }
    const check = await execQuery(`select * from equiment where name = '${name}'`)
    if(check.length > 0 ) return {
        err: true,
        message:" ten san pham nay da ton tai trong he thong"
    }
    const result = await execQuery(`update \`equiment\` set name = '${name}', quantity = ${quantity}, year_of_manufacture = ${year_of_manufacture}, status = '${status}' where id = ${id}`)
    if(result.length == 0 ){
        return{ 
            err: true,
            message:"update thiet bi loi"
        }
    }
    return{
        err: false,
        message:"Update thiet bi thanh cong",
        data: result
    }
 }
 async function fetchDeleteEquipment(req, res){
    const id = req.query.id
    const check = await execQuery(`select * from \`equiment\` where id = ${id}`)
    if(check.length == 0){
        return {
            err: true,
            message:"Khong ton tai thiet bi"
        }
    }
    const result = await execQuery(`delete from equiment where id = ${id}`)
    if(!result) return {
        err: true,
        message:"Co loi khi xoa thiet bi",
        data: detailResult
    }
    
    return {
        err: false,
        data: result, 
        message:"xoa thiet bi thanh cong"
    }

}
module.exports = {
    fetchGetAllEquipment,
    fetchEquipment,
    fetchCreateEquipment,
    fetchUpdateEquipment,
    fetchDeleteEquipment
}