import React from 'react'
import { Footer } from '../../../components/footer/Footer'
import { Header } from '../../../components/header/Header'
import './cart.scss'

export const Cart = () => {
  return (
    <div>
      <Header></Header>
      <div className="header padding___main">
        Giỏ hàng của bạn
      </div>
      <div className="cart-container padding___main">
          <div className="cart-left">
            <div className="cartItem">
              <div className="stt">1</div>
              <div className="img">
                <img
                  src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="name">
                  Tên sản phẩm:
                </div>
                <div className="name-detail">
                  cafe loai 1
                </div>
                
              </div>
              <div className="more">
                <div className="header">Số lượng</div>
                <div className="title">
                  <button>+</button>
                  <div className="sl">1</div>
                  <button>-</button>
                </div>
                </div>
            </div>
        </div>
        <div className="cart-right">
            <div className="header">
              Thông tin đơn hàng
            </div>
            <div className="cost">
              <div className="total">Tổng đơn hàng: 100000đ</div>
              <div className="total">Giảm giá: 10000đ</div>
              <div className="total">thanh toán: 10000đ</div>

            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
