import { Pagination, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NotAllow } from '../../../components/notAllow/NotAllow';
import './personnel.scss'
export const Personnel = () => {
    const [numPage, setNumpage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
  const currentUser = useSelector((state) => state.user);
  const [check, setCheck] = useState(false)
  const [data, setData] = useState({})
  useEffect(()=>{
    axios.get(`/admin/getUsers?page=${currentPage}`).then(res => {
        console.log(res)
      setData(res.data.data.result)
      setNumpage(res.data.data.count)
    })
  },[check, currentPage])
  const handleDelete = (id)=>{
    axios.delete(`/admin/delete_user?id=${id}`)
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
                    <th>Tên người dùng</th>
                    <th>username</th>
                    <th>SĐT</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Quyền</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.length && data.map((item, key) => (
                        <tr key={key}>
                            <td style={{ textAlign: "center" }}>{key + 1}</td>
                            <td >{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td style={{ textAlign: "center" }}>{item.address}</td>
                            <td style={{ textAlign: "center" }}>{item.isAdmin ? 'Admin':'User'}</td>
                            <td className='action' style={{ minWidth: "100px" }}>
                                <button onClick={() => handleDelete(item.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className='page' style={{display: 'flex', justifyContent:'center', margin:'30px 10px'}}>
        <Stack className="stack" spacing={2}>
            <Pagination
              count={numPage}
              page={currentPage}
              onChange={(e) => setCurrentPage(parseInt(e.target.textContent))}
            />
          </Stack>
      </div>
    </div>
      )}

    </div>
  )
}
