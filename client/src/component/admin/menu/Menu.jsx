import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { NotAllow } from '../../../components/notAllow/NotAllow'
import './menu.scss'
export const Menu = () => {
    const currentUser = useSelector((state) => state.user);
    const [check, setCheck] = useState(false)
    const [data, setData] = useState({})
    useEffect(()=>{
      axios.get('/admin/getMenus').then(res => {
        setData(res.data.data)
      })
    },[check])
    const handleDelete = (id)=>{
      axios.delete(`/admin/delete_menu?id=${id}`, {headers: {
        authorization: JSON.stringify(currentUser.token),
    }})
      setCheck(!check)
      console.log("Xoa thanh cong")
    }
    return (
        <div>
            {!currentUser.isAdmin ? (
        <NotAllow></NotAllow>
      ) : (
        <div className="container">
        <div className="addBtn">
            <Link to='./newmenu'>
                <button>
                    Thêm Menu
                </button>
            </Link>
          
        </div>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Hình ảnh</th>
                    <th>Tên menu</th>
                    <th>Giá</th>
                    <th>Giảm giá (%)</th>
                    <th>Chi tiết</th>
                    <th>Mô tả</th>
                    <th>trạng thái</th>
                </tr>
            </thead>
            <tbody>
            {
               data && data.length && data.map((item, key) =>(
                <tr key={key}>
                    <td style={{textAlign:"center"}}>{key + 1}</td>
                    <td >{item.id}</td>
                    <td><img src={item.image_path} alt="" /></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td style={{textAlign:"center"}}>{item.discount}</td>
                    <td>{item.detail}</td>
                    <td>{item.description}</td>
                    <td style={{textAlign:"center"}}>{item.status}</td>
                    <td className='action'>
                       {item.status !== 'Đã xóa' && <button onClick={()=>handleDelete(item.id)}>Xóa</button>}
                        <Link to={`./changeMenu/${item.id}`}>
                            <button>
                                Sửa
                            </button>
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
