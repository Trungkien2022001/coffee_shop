import React, { useState } from "react";
import { Footer } from "../../../components/footer/Footer";
import { Header } from "../../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import { cartSlice } from "../../../redux/cartSlice";
import axios from "axios";

export const Cart = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [payment, setPayment] = useState('Tiền mặt')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')

  const { total_cost, discount, productList } = useSelector(
    (state) => state.cart
  );
  const handleSub = (id)=>{
    dispatch(cartSlice.actions.subOrder(id))
  }
  const handleAdd = (id)=>{
    dispatch(cartSlice.actions.addOrder(id))
  }
  const handleDelete = (key)=>{
    dispatch(cartSlice.actions.deleteOrder(key))
  }
  const handleSubmit = ()=>{
    let order_detail = []
    if(productList){
      productList.map((item, index)=>(
        order_detail.push({
          name: item.product.name,
          quantity: item.quantity
        })
      ))
    }
    let data = {
      username: name,
      note: note,
      phone: phone,
      address: address,
      payment: payment,
      order_detail,
      total_cost: total_cost - discount,
      status: 'Chờ xác nhận'
    }
    axios.post('/admin/create_order', data).then((res)=>{
      alert(res.data.message)
    })
    dispatch(cartSlice.actions.successOrder())
  }
  return (
    <div>
      <Header></Header>
      <div className="header padding___main">Giỏ hàng của bạn</div>
      <div className="cart-container padding___main">
        <div className="cart-left">
          {productList &&
            productList.map((item, key) => (
              <div className="cartItem" key={key}>
                <div className="stt">{key + 1}</div>
                <div className="img">
                  <img
                    src={item.product.image_path}
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="name">Tên sản phẩm:</div>
                  <div className="name-detail">{item.product.name}</div>
                </div>
                <div className="more">
                  <div className="header">Số lượng</div>
                  <div className="title">
                    <button onClick={()=>handleSub(key)}>-</button>
                    <div className="sl">{item.quantity}</div>
                    <button onClick={()=>handleAdd(key)}>+</button>
                  </div>
                </div>
                <div className="total">
                  <div style={{ marginTop: "10px" }}>Tổng:</div>
                  <div style={{ fontWeight: "600" }}>{item.product.price * item.quantity}đ</div>
                </div>
                <div onClick={()=>handleDelete(key)} className="delete">X</div>
              </div>
            ))}
        </div>
        <div className="cart-right">
          <div className="header">Thông tin đơn hàng</div>
          <div className="right-container">
            <div className="cost">
              <div className="total">Tổng đơn hàng: {total_cost}đ</div>
              <div className="total">Giảm giá: {discount}đ</div>
              <div className="total">thanh toán: {total_cost - discount}đ</div>
              <div className="input">
                <select
                  onChange={(e)=>setPayment(e.target.value)}
                  name="Phương thức thanh toán"
                  id=""
                  defaultValue={"Tiền mặt"}
                >
                  <option value="Tiền mặt">Tiền mặt</option>
                  <option value="MoMo">MoMo</option>
                  <option value="ATM">ATM</option>
                </select>
              </div>
            </div>
            <div className="info">
              <div className="input">
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Tên khách hàng" />
              </div>
              <div className="input">
                <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="SĐT" />
              </div>
              <div className="input">
                <input onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Địa chỉ" />
              </div>
              <div className="input">
                <input onChange={(e)=>setNote(e.target.value)} type="text" placeholder="Ghi chú" />
              </div>
            </div>
          </div>
          <div className="submit">
            <button onClick={handleSubmit}>Đặt hàng</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
