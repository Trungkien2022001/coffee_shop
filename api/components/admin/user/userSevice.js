const execQuery = require("../../../models")

async function fetchGetAllUser(req, res){
    const page = req.query.page
    const offset = parseInt(16 * (page - 1))
    count = await execQuery(`select count(id) as cnt from user`)
    const result = await execQuery(`select * from user order by id desc limit 16 offset ${offset}`)
    if (result.length == 0 ){
        return{
            err:true,
            message:"Bang khong co du lieu"
        }
    }
    return {
        err:false,
        data: {
            result,
            count: Math.floor(count[0].cnt / 16) + 1
        },
        message:"Lay danh sach user thanh cong"
    }
}
async function fetchLoginHistory(req){
    const id = req.query.id
    const result = await execQuery(`insert into login_history(user_id) value(${id})`)
    return {
        err: false,
        data: result, 
        message:"them login thanh cong"
    }
}
async function fetchGetLoginHistory(req){
    const id = req.query.id
    const result = await execQuery(`select * from login_history where user_id = ${id}`)
    return {
        err: false,
        data: result, 
        message:"xem thong tin login thanh cong"
    }
}
async function fetchGetInfo(req, res){ 
    const countUser = await execQuery('select count(*) from `user`')
    const countMenu = await execQuery('select count(*) from `menu`')
    const countOrder = await execQuery('select count(*) from `order`')
    const countOrderSuccess = await execQuery(`select count(*) from \`order\` where status = 'Thành công'`)
    const countOrderFail = await execQuery(`select count(*) from \`order\` where status = 'Hủy'`)
    const countTotal = await execQuery(`select sum(total_cost) as sum from \`order\` where status = 'Thành công'`)
    const countTotalMonth = await execQuery(`SELECT MONTH(order_time) as thang, sum(total_cost)  AS doanh_thu_thang FROM \`order\` where status = 'Thành công' group by MONTH(order_time)`)
    return {
        err:false,
        data: {
            countUser: countUser[0]['count(*)'],
            countOrder: countOrder[0]['count(*)'],
            countMenu: countMenu[0]['count(*)'],
            countOrderSuccess: countOrderSuccess[0]['count(*)'],
            countOrderFail: countOrderFail[0]['count(*)'],
            countTotal: countTotal[0]['sum'],
            countTotalMonth: countTotalMonth
        },
        message:"Lay danh sach user thanh cong"
    }
}
async function fetchDeleteUser(req, res){
    const id = req.query.id
    const check = await execQuery(`select * from user where id = ${id}`)
    if(check.length == 0){
        return {
            err: true,
            message:"Khong ton tai user"
        }
    }
    const result1 = await execQuery(`delete from user where id = ${id}`)
    if(!result1) return {
        err: true,
        message:"Co loi khi xoa user",
        data: detailResult
    }
    return {
        err: false,
        data: result1, 
        message:"xoa user thanh cong"
    }

}

module.exports = {
    fetchGetAllUser,
    fetchDeleteUser,
    fetchGetInfo,
    fetchLoginHistory,
    fetchGetLoginHistory
}