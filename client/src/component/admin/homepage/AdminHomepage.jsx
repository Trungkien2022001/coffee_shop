import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './adminhomepage.scss'
export const AdminHomepage = () => {
    const [data, setData] = useState({})
    useEffect(()=>{
      axios.get('/admin/getInfo').then(res => {
        setData(res.data.data)
        console.log(res.data.data)
      })
    },[])
  return (
    <div className='admin-homepage-container padding___main'>
      {data && <>
      <div className="left">
         <div className="title">
        Tổng doanh thu: {data.countTotal}
      </div>
        <div className="title">
        Tổng số người dùng: {data.countUser}
      </div>
      <div className="title">
        Tổng số menu của quán: {data.countMenu}
      </div>
      <div className="title">
        Tổng số đơn hàng: {data.countOrder}
      </div>
      <div className="title">
        Tổng số đơn hàng thành công: {data.countOrderSuccess}
      </div>
      <div className="title">
        Tổng số đơn hàng bị hủy: {data.countOrderFail}
      </div>
      </div>
      
      <div className="right">
      
        <div className="header">
          Doanh thu theo từng tháng
          </div>
          {data.countTotalMonth&& data.countTotalMonth.map((item, index)=>(
            <div key={index} className='item'>
              <div className="header">
                Tháng {item['thang']}: {item['doanh_thu_thang']}đ
              </div>
              <div className="title">

              </div>
            </div>
          ))}
        </div>
      
       
      </>}
      
    </div>
  )
}


