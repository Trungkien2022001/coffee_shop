import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../../../components/footer/Footer'
import { Header } from '../../../components/header/Header'
import './User.scss'
export const User = () => {
    const currentUser = useSelector(state=>state.user)
    console.log(currentUser)
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
                    <div className="content">
                        address: {currentUser.address}
                    </div>
                    <div className="content1" style={{maxWidth: '400px'}}>
                        token: {currentUser.token}
                    </div>
                
                </div>
            </div>
            <div className='cart-history'>
            <div className="title">
                    Lịch sử mua hàng
                </div>
            </div>
            <div className='login-history'>
            <div className="title">
                    Lịch sử đăng nhập
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
