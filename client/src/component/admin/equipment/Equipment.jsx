import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './equipment.scss'
export const Equipment = () => {
  const [check, setCheck] = useState(false)
  const [data, setData] = useState({})
  useEffect(()=>{
    axios.get('/admin/getEquipments').then(res => {
      setData(res.data.data)
    })
  },[check])
  const handleDelete = (id)=>{
    axios.delete(`/admin/delete_equipment?id=${id}`).then(res=>{
      console.log("Xoa thanh cong")
    })
    setCheck(!check)
    
  }
  return (
    <div>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Số lượng</th>
                        <th>Năm sản xuất</th>
                        <th>Tình trạng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                {
                   data && data.length && data.map((item, key) =>(
                    <tr key={key}>
                        <td style={{textAlign:"center"}}>{key + 1}</td>
                        <td >{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td style={{textAlign:"center"}}>{item.year_of_manufacture}</td>
                        <td style={{textAlign:"center"}}>{item.status}</td>
                        <td className='action'>
                            <button onClick={()=>handleDelete(item.id)} >Xóa</button>
                            {/* <button>Sửa</button> */}
                        </td>
                    </tr>
                   )) 
                }
                </tbody>
            </table>
        </div>
    </div>
)
}
