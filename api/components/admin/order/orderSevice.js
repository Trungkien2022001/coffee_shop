const execQuery = require("../../../models")


function completeOrder(order, order_detail){
    order.order_detail=[]
    for( item of order_detail){
        order.order_detail.push(item)
    }
    return order
}
async function fetchGetAllOrder(req, res){
    const result = await execQuery('select * from `order`')
    if (result.length == 0 ){
        return{
            err:true,
            message:"Bang khong co du lieu"
        }
    }
    return {
        err:false,
        data: result,
        message:"Lay danh sach order thanh cong"
    }
}
async function fetchGetOrder(req, res){
    const id = req.query.id
    let result = await execQuery(`select * from \`order\` where id = ${id}`)
    if (result.length == 0 ){
        return{
            err:true,
            message:"Khong ton tai order"
        }
    }
    const order_detail = await execQuery(`select odt.id, odt.order_id, menu.name, quantity from order_detail as odt, menu  where order_id = ${id} and menu.id = odt.menu_id`)
    if(order_detail.length == 0 ) return{
        err: true,
        message: "order nay khong co san pham nao"
    }
    
    result = completeOrder(result[0], order_detail)
    return {
        err:false,
        data: result,
        message:"Lay thong tin order thanh cong"
    }
}
 async function fetchCreateOrder(req, res){
    const username = req.body.username||'Ẩn danh'
    const note = req.body.note||'Không có'
    const total_cost = req.body.total_cost
    const payment = req.body.payment||"tiền mặt"
    const status = req.body.status||"Thành công"
    let data_order_detail = req.body.order_detail
    const result = await execQuery(`insert into \`order\` (username, note, total_cost, payment, status) values('${username}', '${note}', ${total_cost}, '${payment}', '${status}')`)
    if(result.length == 0 ){
        return{ 
            err: true,
            message:"them don hang bi loi"
        }
    }
    for(item of data_order_detail){
        let menuID = await execQuery(`select id from menu where name = '${item.name}'`)
        if(menuID.length == 0) return{
            err: true,
            message:"Co loi khi them san pham",
            data: menuID
        }
        let detailResult = await execQuery(`insert into order_detail (order_id, menu_id, quantity) values(${result.insertId}, ${menuID[0].id}, ${item.quantity})`)
        if(!detailResult) return{
            err: true,
            message:"Co loi khi them san pham - san pham khong ton tai trong he thong",
            data: detailResult
        }
    }
    return{
        err: false,
        message:"Them don hang thanh cong",
        data: result
    }
 }
async function fetchUpdateOrder(req, res){
    const id = req.query.id
    const username = req.body.username||'Ẩn danh'
    const note = req.body.note||'Không có'
    const total_cost = req.body.total_cost
    const payment = req.body.payment||"tiền mặt"
    const status = req.body.status||"Thành công"
    let data_order_detail_add = req.body.order_detail_add
    let data_order_detail_remove = req.body.order_detail_remove
    const check = await execQuery(`select * from \`order\` where id = ${id}`)
    if(check.length == 0){
        return {
            err: true,
            message:"Khong ton tai don hang"
        }
    }
    const updateOrder = await execQuery(`update \`order\` set username = '${username}', note = '${note}', total_cost = ${total_cost},payment = '${payment}',status = '${status}'  where id = ${id}`)
    if (!updateOrder) return {
        err: true,
        data: updateOrder,
        message:"cap nhat don hang bi loi"
    } 
    for(item of data_order_detail_add){
        let menuID = await execQuery(`select id from menu where name = '${item.name}'`)
        if(menuID.length == 0) return{
            err: true,
            message:"Co loi khi cap nhat don hang",
            data: menuID
        }
        let detailResult = await execQuery(`insert into order_detail (order_id, menu_id, quantity) values(${id}, ${menuID[0].id}, ${item.quantity})`)
        if(!detailResult) return{
            err: true,
            message:"Co loi cap nhat don hang",
            data: detailResult
        }
    }
    for(item of data_order_detail_remove){
        let menuID = await execQuery(`select id from menu where name = '${item.name}'`)
        if(!menuID) return{
            err: true,
            message:"Co loi khi cap nhat don hang",
            data: detailResult
        }
        let detailResult = await execQuery(`delete from order_detail where order_id = ${id} and menu_id = ${menuID[0].id}`)
        if(!detailResult) return{
            err: true,
            message:"Co loi cap nhat don hang",
            data: detailResult
        }
    }
    return{
        err: false,
        data:updateOrder,
        message: "Cap nhat don hang thanh cong"
    }   
}
async function fetchDeleteOrder(req, res){
    const id = req.query.id
    const check = await execQuery(`select * from \`order\` where id = ${id}`)
    if(check.length == 0){
        return {
            err: true,
            message:"Khong ton tai don hang"
        }
    }
    const result = await execQuery(`delete from order_detail where order_id = ${id}`)
    if(!result) return {
        err: true,
        message:"Co khi xoa don hang",
        data: detailResult
    }
    const result1 = await execQuery(`delete from \`order\` where id = ${id}`)
    if(!result1) return {
        err: true,
        message:"Co khi xoa don hang",
        data: detailResult
    }
    return {
        err: false,
        data: result1, 
        message:"xoa don hang thanh cong"
    }

}






module.exports = {
    fetchGetAllOrder,
    fetchGetOrder,
    fetchCreateOrder,
    fetchUpdateOrder,
    fetchDeleteOrder,

}