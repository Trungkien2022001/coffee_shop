import { faCheck, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Footer } from "../../../components/footer/Footer";
import { Header } from "../../../components/header/Header";
import { cartSlice } from "../../../redux/cartSlice";
import "./Product.scss";
export const Product = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const id = location.pathname.split('/')[2]
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState()
  const handleSubmit = ()=>{
    dispatch(cartSlice.actions.addProduct({product, quantity}))
    alert("Thêm sản phẩm vào đơn hàng thành công")
  }
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get(`/admin/getMenu?id=${id}`)
      setProduct(res.data.data[0])
    }
    getData()
  },[id])
  return (
    <div>
        <Header/>
      <div className="product-container padding___main">
        {product && 
        <div className="product">
          <div className="product-left">
            <img
              src={product.image_path}
              alt=""
            />
          </div>
          <div className="product-right">
            <div className="productName">{product.name}</div>
            <div className="productPrice">Giá: {product.price}đ</div>
            <div className="productDetail">
                <div className="icon">
                <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="content">
                  {product.content}
                </div>
            </div>
            <div className="productDesc">
                <div className="icon">
                <FontAwesomeIcon icon={faCommentAlt} />
                </div>
                <div className="content">
                {product.description}
                </div>
            </div>
            <div className="productDiscount">
                Giảm giá: {product.discount}%
            </div>
            <div className="productQuantity">
                <div className="title">Số lượng: </div>
                <input onChange={(e)=>setQuantity(e.target.value)} type="number" placeholder="số lượng" defaultValue={1} max='100' min={1}/>
            </div>
            <div className="productSubmit">
                <button onClick={handleSubmit}>Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>}
      </div>
      <Footer/>
    </div>
  );
};
