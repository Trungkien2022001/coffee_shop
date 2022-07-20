const execQuery = require("../../../models")


function completeOrder(order, order_detail) {
    order.order_detail = []
    for (item of order_detail) {
        order.order_detail.push(item)
    }
    return order
}
async function fetchGetAllOrder(req, res) {
    const page = req.query.page
    const offset = parseInt(16 * (page - 1))
    count = await execQuery(`select count(id) as cnt from \`order\``)
    let result
    try {
        result = await execQuery(`select * from \`order\` limit 16 offset ${offset}`)
    } catch (error) {
        return {
            err: true,
            message: 'Đã xảy ra lỗi',
            data: error
        }
    }
    if (result.length == 0) {
        return {
            err: true,
            message: "Bang khong co du lieu"
        }
    }
    return {
        err: false,
        data: {
            result,
            count: Math.floor(count[0].cnt / 16) + 1
        },
        message: "Lay danh sach order thanh cong"
    }
}
async function fetchGetUserOrder(req, res) {
    const id = req.query.id
    let result
    try {
        result = await execQuery(`select * from \`order\` where user_id=${id}`)
    } catch (error) {
        return {
            err: true,
            message: 'Đã xảy ra lỗi',
            data: error
        }
    }
    if (result.length == 0) {
        return {
            err: true,
            message: "Bang khong co du lieu"
        }
    }
    return {
        err: false,
        data: result,
        message: "Lay danh sach order thanh cong"
    }
}
async function fetchGetOrder(req, res) {
    const id = req.query.id
    let result
    try {
        result = await execQuery(`select * from \`order\` where id = ${id}`)
    } catch (error) {
        return {
            err: true,
            message: 'Đã xảy ra lỗi',
            data: error
        }
    }
    if (result.length == 0) {
        return {
            err: true,
            message: "Khong ton tai order"
        }
    }
    let order_detail
    try {
        
         order_detail = await execQuery(`select odt.id, odt.order_id, menu.name, quantity from order_detail as odt, menu  where order_id = ${id} and menu.id = odt.menu_id`)
    } catch (error) {
       return{
        err:true,
        message:'Đã xảy ra lỗi',
        data: error
       } 
    }
    if (order_detail.length == 0) return {
        err: true,
        message: "order nay khong co san pham nao"
    }

    result = completeOrder(result[0], order_detail)
    return {
        err: false,
        data: result,
        message: "Lay thong tin order thanh cong"
    }
}
async function fetchCreateOrder(req, res) {
    const username = req.body.username || 'Ẩn danh'
    const note = req.body.note || 'Không có'
    const total_cost = req.body.total_cost
    const payment = req.body.payment || "tiền mặt"
    const status = req.body.status || "Thành công"
    const phone = req.body.phone || ''
    const address = req.body.address || ''
    const user_id = req.body.user_id || 0
    let data_order_detail = req.body.order_detail
    let result 
    try {     
       result = await execQuery(`insert into \`order\` (username, note, total_cost, payment, status, phone, address, user_id) values('${username}', '${note}', ${total_cost}, '${payment}', '${status}', '${phone}', '${address}',${user_id})`)
    } catch (error) {
       return{
        err:true,
        message:'Đã xảy ra lỗi',
        data: error
       } 
    }
    if (result.length == 0) {
        return {
            err: true,
            message: "them don hang bi loi"
        }
    }
    for (item of data_order_detail) {
        let menuID
        try {
             menuID = await execQuery(`select id from menu where name = '${item.name}'`)
        } catch (error) {
           return{
            err:true,
            message:'Đã xảy ra lỗi',
            data: error
           } 
        }
        if (menuID.length == 0) return {
            err: true,
            message: "Co loi khi them san pham",
            data: menuID
        }
        let detailResult
        try {
             detailResult = await execQuery(`insert into order_detail (order_id, menu_id, quantity) values(${result.insertId}, ${menuID[0].id}, ${item.quantity})`)
        } catch (error) {
           return{
            err:true,
            message:'Đã xảy ra lỗi',
            data: error
           } 
        }
        if (!detailResult) return {
            err: true,
            message: "Co loi khi them san pham - san pham khong ton tai trong he thong",
            data: detailResult
        }
    }
    return {
        err: false,
        message: "Thêm đơn hàng thành công",
        data: result
    }
}
async function fetchUpdateOrder(req, res) {
    const id = req.query.id
    const username = req.body.username || 'Ẩn danh'
    const note = req.body.note || 'Không có'
    const total_cost = req.body.total_cost
    const payment = req.body.payment || "tiền mặt"
    const status = req.body.status || "Thành công"
    let data_order_detail_add = req.body.order_detail_add
    let data_order_detail_remove = req.body.order_detail_remove
    let check
    try {
         check = await execQuery(`select * from \`order\` where id = ${id}`)
    } catch (error) {
       return{
        err:true,
        message:'Đã xảy ra lỗi',
        data: error
       } 
    }
    if (check.length == 0) {
        return {
            err: true,
            message: "Khong ton tai don hang"
        }
    }
    let updateOrder
    try { 
        updateOrder = await execQuery(`update \`order\` set username = '${username}', note = '${note}', total_cost = ${total_cost},payment = '${payment}',status = '${status}'  where id = ${id}`)
    } catch (error) {
       return{
        err:true,
        message:'Đã xảy ra lỗi',
        data: error
       } 
    }
    if (!updateOrder) return {
        err: true,
        data: updateOrder,
        message: "cap nhat don hang bi loi"
    }
    for (item of data_order_detail_add) {
        let menuID
        try {
            menuID = await execQuery(`select id from menu where name = '${item.name}'`)
        } catch (error) {
           return{
            err:true,
            message:'Đã xảy ra lỗi',
            data: error
           } 
        }
        if (menuID.length == 0) return {
            err: true,
            message: "Co loi khi cap nhat don hang",
            data: menuID
        }
        let detailResult
        try {
             detailResult = await execQuery(`insert into order_detail (order_id, menu_id, quantity) values(${id}, ${menuID[0].id}, ${item.quantity})`)
        } catch (error) {
           return{
            err:true,
            message:'Đã xảy ra lỗi',
            data: error
           } 
        }
        if (!detailResult) return {
            err: true,
            message: "Co loi cap nhat don hang",
            data: detailResult
        }
    }
    for (item of data_order_detail_remove) {
        let menuID
        try {
             menuID = await execQuery(`select id from menu where name = '${item.name}'`)
    
        } catch (error) {
           return{
            err:true,
            message:'Đã xảy ra lỗi',
            data: error
           } 
        }
        if (!menuID) return {
            err: true,
            message: "Co loi khi cap nhat don hang",
            data: detailResult
        }
        let detailResult
        try {
             detailResult = await execQuery(`delete from order_detail where order_id = ${id} and menu_id = ${menuID[0].id}`)
    
        } catch (error) {
           return{
            err:true,
            message:'Đã xảy ra lỗi',
            data: error
           } 
        }
        if (!detailResult) return {
            err: true,
            message: "Co loi cap nhat don hang",
            data: detailResult
        }
    }
    return {
        err: false,
        data: updateOrder,
        message: "Cap nhat don hang thanh cong"
    }
}
async function fetchDeleteOrder(req, res) {
    const id = req.query.id
    let check
    try {
         check = await execQuery(`select * from \`order\` where id = ${id}`)
    
    } catch (error) {
       return{
        err:true,
        message:'Đã xảy ra lỗi',
        data: error
       } 
    }
    if (check.length == 0) {
        return {
            err: true,
            message: "Khong ton tai don hang"
        }
    }
    let result 
    try {
         result = await execQuery(`delete from order_detail where order_id = ${id}`)
    
    } catch (error) {
       return{
        err:true,
        message:'Đã xảy ra lỗi',
        data: error
       } 
    }
    if (!result) return {
        err: true,
        message: "Co khi xoa don hang",
        data: detailResult
    }
    let result1
    try {
         result1 = await execQuery(`update \`order\` set status = 'Hủy' where id = ${id}`)
    
    } catch (error) {
       return{
        err:true,
        message:'Đã xảy ra lỗi',
        data: error
       } 
    }
    if (!result1) return {
        err: true,
        message: "Co khi xoa don hang",
        data: detailResult
    }
    return {
        err: false,
        data: result1,
        message: "xoa don hang thanh cong"
    }

}






module.exports = {
    fetchGetAllOrder,
    fetchGetOrder,
    fetchCreateOrder,
    fetchUpdateOrder,
    fetchDeleteOrder,
    fetchGetUserOrder

}