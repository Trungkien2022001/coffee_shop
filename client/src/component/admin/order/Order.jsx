import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './order.scss'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { NotAllow } from '../../../components/notAllow/NotAllow';
export const Order = () => {
    const currentUser = useSelector((state) => state.user);
    const [check, setCheck] = useState(false)
    const [data, setData] = useState({})
    useEffect(()=>{
      axios.get('/admin/getOrders').then(res => {
        setData(res.data.data)
      })
    },[check])
    const handleDelete = (id)=>{
      axios.delete(`/admin/delete_order?id=${id}`)
      setCheck(!check)
      console.log("Xoa thanh cong")
    }
    return (
        <div>
            {!currentUser.isAdmin ? (
        <NotAllow></NotAllow>
      ) : (
        <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Tên khách hàng</th>
                            <th>Tổng</th>
                            <th>Payment</th>
                            <th>Ghi chú</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                       data && data.length && data.map((item, key) =>(
                        <tr key={key}>
                            <td style={{textAlign:"center"}}>{key + 1}</td>
                            <td >{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.total_cost}</td>
                            <td>{item.payment}</td>
                            <td>{item.note}</td>
                            <td style={{textAlign:"center"}}>{item.status}</td>
                            <td className='action' style={{minWidth:"100px"}}>
                                <button onClick={()=>handleDelete(item.id)}>Xóa</button>
                                {/* <button>Sửa</button> */}
                                <Link to={`/orderDetail/${item.id}`}>
                                    <button>Chi tiết</button>
                                </Link>
                                
                            </td>
                        </tr>
                       )) 
                    }
                    </tbody>
                </table>
            </div>
      )}
            
        </div>
    )
}
