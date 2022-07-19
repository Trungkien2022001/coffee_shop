import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './order.scss'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { NotAllow } from '../../../components/notAllow/NotAllow';
import { Pagination, Stack } from '@mui/material';
export const Order = () => {
    const [numPage, setNumpage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const currentUser = useSelector((state) => state.user);
    const [check, setCheck] = useState(false)
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`/admin/getOrders?page=${currentPage}`, {
            headers: {
                authorization: JSON.stringify(currentUser),
            }
        }).then(res => {
            setData(res.data.data.result)
            setNumpage(res.data.data.count)
        })
    }, [check, currentUser, currentPage])
    const handleDelete = (id) => {
        axios.delete(`/admin/delete_order?id=${id}`, {
            headers: {
                authorization: JSON.stringify(currentUser),
            }
        })
        setCheck(!check)
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
                                data && data.length && data.map((item, key) => (
                                    <tr key={key}>
                                        <td style={{ textAlign: "center" }}>{key + 1}</td>
                                        <td >{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.total_cost}</td>
                                        <td>{item.payment}</td>
                                        <td>{item.note}</td>
                                        <td style={{ textAlign: "center" }}>{item.status}</td>
                                        <td className='action' style={{ minWidth: "100px" }}>
                                            {item.status !== 'Hủy' ? <>
                                                <button onClick={() => handleDelete(item.id)}>Hủy</button>
                                                <Link to={`./orderDetail/${item.id}`}>
                                                    <button>Chi tiết</button>
                                                </Link> </> : <></>}

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
