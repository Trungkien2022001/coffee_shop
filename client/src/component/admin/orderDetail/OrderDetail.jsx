import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import './orderDetail.scss'
export const OrderDetail = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [data, setData] = useState({})
    useEffect(()=>{
      axios.get(`/admin/get_order?id=${id}`).then(res => {
        setData(res.data.data)
      })
    },[id])
  return (
    <div>
        <div className="container">
        <Link to={'../'}>Quay về trang chủ</Link>
            <div className="header">
                Đơn hàng chi tiết
            </div>
            <div className="infor">
                <div className="infor_id">
                    ID: {data.id}
                </div>
                <div className="infor_username">
                    Tên khách hàng: {data.username}
                </div>
                <div className="infor_note">
                    Ghi chú: {data.note}
                </div>
                <div className="infor_total_cost">
                    Tổng đơn hàng: {data.total_cost}
                </div>
                <div className="infor_payment">
                    Phương thức thanh toán: {data.payment}
                </div>
                <div className="infor_payment">
                    Trạng thái: {data.status}
                </div>
            </div>
            <div className="infor-detail">
                <div className="detail_header">
                    Danh sách sản phẩm
                </div>
                {data && data.order_detail && data.order_detail.map((item, key)=>(
                    <div key={key} className="order_detail">
                        <div className="order_detail_name">
                            Tên: {item.name}
                        </div>
                        <div className="order_detail_quantity1">
                            số lượng: {item.quantity}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
