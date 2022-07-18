import React from 'react'
import { Header } from '../../../components/header/Header'
import { Footer } from '../../../components/footer/Footer'
import './Homepage.scss'

export const Homepage = () => {
  return (
    <div>
      <Header></Header>
      <div className="product-container padding___main">
        <div className="container-header">
          <div className="item">Tất cả</div>
          <div className="item">Cafe</div>
          <div className="item">Cafe pha phin</div>
          <div className="item">Trà</div>
          <div className="item"> Trà sữa</div>
          <div className="item"> Sinh tố</div>
          <div className="item">Bánh kẹo</div>
          <div className="item">Khác</div>
        </div>
        <div className="product-header">
            Danh sách sản phẩm
        </div>
        <div className="product">
          <div className="product-item">
            <div className="productImg">
              <img src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" alt="" />
            </div>
            <div className="productName">
              Cafe thượng hạng
            </div>
            <div className="productPrice">
              Giá: 30000đ
            </div>
            <div className="productDetail">
              Cafe làm từ lá cấy sbeoi rhjrigh
            </div>
            <div className="productDiscount">
              <div className="discount">-8%</div>
            </div>
          </div>
          <div className="product-item">
            <div className="productImg">
              <img src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" alt="" />
            </div>
            <div className="productName">
              Cafe thượng hạng
            </div>
            <div className="productPrice">
              Giá: 30000đ
            </div>
            <div className="productDetail">
              Cafe làm từ lá cấy sbeoi rhjrigh
            </div>
          </div>
          <div className="product-item">
            <div className="productImg">
              <img src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" alt="" />
            </div>
            <div className="productName">
              Cafe thượng hạng
            </div>
            <div className="productPrice">
              Giá: 30000đ
            </div>
            <div className="productDetail">
              Cafe làm từ lá cấy sbeoi rhjrigh
            </div>
          </div>
          <div className="product-item">
            <div className="productImg">
              <img src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" alt="" />
            </div>
            <div className="productName">
              Cafe thượng hạng
            </div>
            <div className="productPrice">
              Giá: 30000đ
            </div>
            <div className="productDetail">
              Cafe làm từ lá cấy sbeoi rhjrigh
            </div>
          </div>
          <div className="product-item">
            <div className="productImg">
              <img src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" alt="" />
            </div>
            <div className="productName">
              Cafe thượng hạng
            </div>
            <div className="productPrice">
              Giá: 30000đ
            </div>
            <div className="productDetail">
              Cafe làm từ lá cấy sbeoi rhjrigh
            </div>
          </div>
      

         
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
