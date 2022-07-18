import React from 'react'
import { Header } from '../../../components/header/Header'
import { Footer } from '../../../components/footer/Footer'
import {Link} from 'react-router-dom'
import './Homepage.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export const Homepage = () => {
  const [type, setType] = useState(0)
  const [productList, setProductList] = useState([])
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get(`/admin/getMenus?type=${type}`)
      setProductList(res.data.data)
      console.log(res);
    }
    getData()
  },[type])
  console.log(productList);
  return (
    <div>
      <Header></Header>
      <div className="product-container padding___main">
        <div className="container-header">
          <div className="item" onClick={()=>setType(0)}>Tất cả</div>
          <div className="item" onClick={()=>setType(1)}>Cafe</div>
          <div className="item" onClick={()=>setType(2)}>Cafe pha phin</div>
          <div className="item" onClick={()=>setType(3)}>Trà</div>
          <div className="item" onClick={()=>setType(4)}> Trà sữa</div>
          <div className="item" onClick={()=>setType(5)}> Sinh tố</div>
          <div className="item" onClick={()=>setType(7)}>Bánh kẹo</div>
          <div className="item" onClick={()=>setType(6)}>Khác</div>
        </div>
        <div className="product-header">
            Danh sách sản phẩm
        </div>
        <div className="product">
          {productList &&productList.length && productList.map((item, key)=>(
            <Link key={key} style={{color:'black', textDecoration:'none'}} to={`/product/${item.id}`}>
            <div  className="product-item">
              <div className="productImg">
                <img src={item.image_path} alt="" />
              </div>
              <div className="productName">
                {item.name}
              </div>
              <div className="productPrice">
                Giá: {item.price}đ
              </div>
              <div className="productDetail">
                {item.detail}
              </div>
              <div className="productDiscount">
                <div className="discount">-{item.discount}%</div>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
