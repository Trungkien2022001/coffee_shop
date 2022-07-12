const execQuery = require("../../models");


function completeOrder(order, order_detail){
    order.order_detail=[]
    for( item of order_detail){
        order.order_detail.push(item)
    }
    return order
}
async function fetchGetAllOrder(req, res){
    const result = await execQuery('select * from `order`')
    console.log(result)
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
    // let dataCreate = {}
    // if(username) dataCreate.username = username
    // if(note) dataCreate.note = note
    // if(total_cost) dataCreate.total_cost = total_cost
    // if(payment) dataCreate.payment = payment
    // if(status) dataCreate.status = status
    const result = await execQuery(`insert into \`order\` (username, note, total_cost, payment, status) values('${username}', '${note}', ${total_cost}, '${payment}', '${status}')`)
    if(result.length == 0 ){
        return{ 
            err: true,
            message:"them don hang bi loi"
        }
    }
    for(item of data_order_detail){
        let menuID = await execQuery(`select id from menu where name = '${item.name}'`)
        if(!menuID) return{
            err: true,
            message:"Co loi khi them san pham",
            data: detailResult
        }
        let detailResult = await execQuery(`insert into order_detail (order_id, menu_id, quantity) values(${result.insertId}, ${menuID[0].id}, ${item.quantity})`)
        if(!detailResult) return{
            err: true,
            message:"Co loi khi them san pham",
            data: detailResult
        }
    }
    return{
        err: false,
        message:"Them don hang thanh cong",
        data: result
    }
    // let menuID = await execQuery(`select id from menu where name = '${data_order_detail[0].name}'`)
    // console.log(menuID)
 }


module.exports = {
    fetchGetAllOrder,
    fetchGetOrder,
    fetchCreateOrder
}