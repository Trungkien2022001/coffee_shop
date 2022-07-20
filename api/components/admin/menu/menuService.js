const execQuery = require("../../../models")

async function fetchGetAllMenu(req, res){
    const type = req.query.type
    const page = req.query.page
    const offset = parseInt(16 * (page - 1))
    
    let result
    let count
    if(type == 0 || !type){
        result = await execQuery(`select * from menu where status <>'Hết hàng' order by id desc limit 16 offset ${offset}`)
        count = await execQuery(`select count(id) as cnt from menu where status <>'Hết hàng'`)
    } else if (type == -1){
        result = await execQuery(`select * from menu order by id desc limit 16 offset ${offset}`)
        count = await execQuery(`select count(id) as cnt from menu`)
    } else {
        result = await execQuery(`select * from menu where status <>'Hết hàng' and category_id = ${type} order by id desc limit 16 offset ${offset}`)
        count = await execQuery(`select count(id) as cnt from menu where status <>'Hết hàng' and category_id = ${type}`)    
    }
    if (result.length == 0 ){
        return{
            err:true,
            message:"Menu khong co du lieu"
        }
    }
    return {
        err:false,
        data: {
            result,
            count: Math.floor(count[0].cnt / 16) + 1
        },
        message:"Lay danh sach menu thanh cong"
    }
}
async function fetchMenu(req, res){
    const id = req.query.id
    let result = await execQuery(`select * from \`menu\` where id = ${id}`)
    if (result.length == 0 ){
        return{
            err:true,
            message:"Khong ton tai menu"
        }
    }
    return {
        err:false,
        data: result,
        message:"Lay thong tin menu thanh cong"
    }
}
async function fetchCreateMenu(req, res){
    const name = req.body.name||'Ẩn danh'
    const category_id = req.body.category_id||1
    const price = req.body.price
    const discount = req.body.discount||0
    const detail = req.body.detail||""
    const description= req.body.description||""
    const image_path= req.body.image_path||""

    const check = await execQuery(`select * from menu where name = '${name}'`)
    if(check.length > 0 ) return {
        err: true,
        message:" ten san pham nay da ton tai trong he thong"
    }
    const result = await execQuery(`insert into \`menu\` (name, category_id, price, discount, detail, description, image_path) values('${name}', ${category_id}, ${price}, ${discount}, '${detail}', '${description}', '${image_path}')`)
    if(result.length == 0 ){
        return{ 
            err: true,
            message:"them menu bi loi"
        }
    }
    return{
        err: false,
        message:"Them menu thanh cong",
        data: result
    }
 }
async function fetchCreateMenus(req, res){
  

    const data = await execQuery(`select * from menu limit 50 offset 0`)
    
    for(let i = 0; i < 10000; ++i){
        // const result = await execQuery(`insert into \`menu\` (name, category_id, price, discount, detail, description, image_path) values('${name}', ${category_id}, ${price}, ${discount}, '${detail}', '${description}', '${image_path}')`)
        await execQuery(`insert into \`menu\` (name, category_id, price, discount, detail, description, image_path) values('${data[Math.floor(Math.random() * 30)].name}', ${data[Math.floor(Math.random() * 30)].category_id}, ${data[Math.floor(Math.random() * 30)].price}, ${data[Math.floor(Math.random() * 30)].discount}, '${data[Math.floor(Math.random() * 30)].detail}', '${data[Math.floor(Math.random() * 30)].description}', '${data[Math.floor(Math.random() * 30)].image_path}')`)
    }
    return{
        err: false,
        message:"Them menu thanh cong",
        data: data
    }
    // const data = await execQuery(`select * from user`)
    
    // for(let i = 0; i < 1000; ++i){
    //     // const result = await execQuery(`insert into \`menu\` (name, category_id, price, discount, detail, description, image_path) values('${name}', ${category_id}, ${price}, ${discount}, '${detail}', '${description}', '${image_path}')`)
    //     await execQuery(`insert into \`user\` (name, username, password, phone, email, address) values('${data[Math.floor(Math.random() * 11)].name}', '${data[Math.floor(Math.random() * 11)].username}', '${data[Math.floor(Math.random() * 11)].password}', '${data[Math.floor(Math.random() * 11)].phone}', '${data[Math.floor(Math.random() * 11)].email}', '${data[Math.floor(Math.random() * 11)].address}')`)
    // }
    // return{
    //     err: false,
    //     message:"Them menu thanh cong",
    //     data: data
    // }
 }
 async function fetchCreateMenus1(req, res){
  

    const data = await execQuery(`select * from menu`)
    
    for(let i = 0; i < 10000; ++i){
        // const result = await execQuery(`insert into \`menu\` (name, category_id, price, discount, detail, description, image_path) values('${name}', ${category_id}, ${price}, ${discount}, '${detail}', '${description}', '${image_path}')`)
        await execQuery(`insert into \`menu\` (name, category_id, price, discount, detail, description, image_path) values('${data[Math.floor(Math.random() * 30)].name}', ${data[Math.floor(Math.random() * 30)].category_id}, ${data[Math.floor(Math.random() * 30)].price}, ${data[Math.floor(Math.random() * 30)].discount}, '${data[Math.floor(Math.random() * 30)].detail}', '${data[Math.floor(Math.random() * 30)].description}', '${data[Math.floor(Math.random() * 30)].image_path}')`)
    }
    return{
        err: false,
        message:"Them menu thanh cong",
        data: data
    }
 }

 async function fetchUpdateMenu(req, res){
    const id = req.query.id
    const name = req.body.name||'Ẩn danh'
    const category_id = req.body.category_id||1
    const price = req.body.price
    const discount = req.body.discount||0
    const detail = req.body.detail||""
    const description= req.body.description||""
    const image_path= req.body.image_path||""
    const check1 = await execQuery(`select * from \`menu\` where id = ${id}`)
    if(check1.length == 0){
        return {
            err: true,
            message:"Khong ton tai menu"
        }
    }
    const check = await execQuery(`select * from menu where name = '${name}'`)
    if(check.length > 0 ) return {
        err: true,
        message:" ten san pham nay da ton tai trong he thong"
    }
    const result = await execQuery(`update \`menu\` set name = '${name}', category_id = ${category_id}, price = ${price},discount = ${discount}, detail = '${detail}', description = '${description}', image_path = '${image_path}' where id = ${id}`)
    if(result.length == 0 ){
        return{ 
            err: true,
            message:"update menu bi loi"
        }
    }
    return{
        err: false,
        message:"Update menu thanh cong",
        data: result
    }
 }
 async function fetchDeleteMenu(req, res){
    const id = req.query.id
    const check = await execQuery(`select * from \`menu\` where id = ${id}`)
    if(check.length == 0){
        return {
            err: true,
            message:"Khong ton tai menu"
        }
    }
    const result = await execQuery(`update menu set status = 'Đã xóa' where id = ${id}`)
    if(!result) return {
        err: true,
        message:"Co loi khi xoa menu",
        data: detailResult
    }
    
    return {
        err: false,
        data: result, 
        message:"xoa menu thanh cong"
    }

}
module.exports = {
    fetchGetAllMenu,
    fetchMenu,
    fetchCreateMenu,
    fetchCreateMenus,
    fetchUpdateMenu,
    fetchDeleteMenu,
}