import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Footer } from '../../../components/footer/Footer'
import { Header } from '../../../components/header/Header'
import './User.scss'
export const User = () => {
    const currentUser = useSelector(state => state.user)
    // console.log(currentUser)
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [data, setData] = useState()
    const [loginData, setLoginData] = useState()
    useEffect(() => {
        const getData = async () => {
            await axios.get(`/admin/getuserorder?id=${id}`).then(res => {
                setData(res.data.data)
            })
            await axios.get(`/admin/getloginhistory?id=${id}`).then(res => {
                setLoginData(res.data.data)
            })
        }
        getData()
        window.scrollTo(0, 0)
    }, [id])
    return (
        <div>
            <Header></Header>
            <div className="user-container padding___main">
                <div className='infor'>
                    <div className="title">
                        Thông tin người dùng
                    </div>
                    <div className="detail">
                        <div className="content">
                            ID: {currentUser.id}
                        </div>
                        <div className="content">
                            Tên người dùng: {currentUser.name}
                        </div>
                        <div className="content">
                            Username: {currentUser.username}
                        </div>
                        <div className="content">
                            SĐT: {currentUser.phone}
                        </div>
                        <div className="content">
                            email: {currentUser.email}
                        </div>
                        <div className="content1" style={{ maxWidth: '400px' }}>
                            token:{currentUser.token}
                        </div>

                    </div>
                </div>
                <div className='cart-history'>
                    <div className="title">
                        Lịch sử mua hàng
                    </div>
                    <div className="cart-container1">

                   
                    {data && data.length && data.map((item, key) => (
                        <div key={key} className='cart-container'>
                            <div className="part1">
                                <div className="id" style={{ width: '40px' }}>
                                    ID:{item.id}
                                </div>
                                <div className="id" style={{ width: '200px' }}>Tên: {item.username}</div>
                                <div className="id">Status: {item.status}</div>
                            </div>
                            <div className="part2">
                                <div style={{ width: '140px' }} className="id1">
                                    Tổng:{item.total_cost}đ
                                </div>
                                <div className="id">
                                    Thanh toán: {item.payment}
                                </div>
                            </div>
                            <div className="id2">
                                Thời gian:{item.order_time}
                            </div>
                            <div className="id3">
                                Ghi chú:{item.note}
                            </div>
                        </div>
                    ))}
                 </div>
                </div>
                <div className='login-history'>
                    <div className="title">
                        Lịch sử đăng nhập
                    </div>
                    <div className="login-container">
                        {loginData && loginData.length && loginData.map((item, key) => (
                            <div key={key} className="item">
                                <div style={{ width: '60px' }} className='st'>Stt: {key+1}</div>
                                <div className='sd'>Time: {(item.date)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
