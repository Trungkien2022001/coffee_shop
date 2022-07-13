import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './changeMenu.scss'
export const ChangeMenu = () => {
  const id = useLocation().pathname.split('/')[2]
  const [oldData, setOldData] = useState({})
  const [name, setName] = useState('')
  const [category, setCategory] = useState(1)
  const [discount, setDiscount] = useState(0)
  const [price, setPrice] = useState(0)
  const [detail, setDetail] = useState('')
  const [description, setDescription] = useState('')
  const [image_path, setImage_path] = useState('')
  const [status, setStatus] = useState('')
  useEffect(()=>{
    axios.get(`/admin/getMenu?id=${id}`).then(res =>{
      console.log(res.data.data[0])
      setOldData(res.data.data[0])
    })
  },[id])
  const handleUpdate = ()=>{
    const data = {
      name:name||oldData.name,
      category:category||oldData.category,
      price:price||oldData.price,
      discount:discount||oldData.discount,
      detail:detail||oldData.detail,
      description:description||oldData.description,
      image_path:image_path||oldData.image_path,
      status:status||oldData.status,
    }
    axios.put(`/admin/update_menu?id=${id}`, data).then(res=>{
      console.log(res.data)
      if(res.data.err === false) {
          window.location = '../';
      }
    })
  }
  return (
    <div>
        <div className="container1">
            <div className="lkrtrlkht">
              <div>

                Sửa thông tin menu, id menu: {id}
              </div>
                <Link to={'../'}>Quay về trang chủ</Link>
            </div>
            <div className='information'>
                <div className="input">
                    <div className="header">
                        Tên Menu: 
                    </div>
                    <input onChange={(e)=>{setName(e.target.value)}} defaultValue={oldData.name} type="text" name="" id="" />
                </div>
                <div className="input">
                    
                    <div className="header">
                        Loại Menu:
                    </div>
                    <select defaultValue={oldData.category_id} onChange={(e)=>{setCategory(e.target.value)}} name="Hình thức thanh toán" id="">
                        <option value="1">Cà phê</option>
                        <option value="2">Cà phê pha phin</option>
                        <option value="3">Trà</option>
                        <option value="4">Trà sữa</option>
                        <option value="5">Sinh tố</option>
                        <option value="7">Bánh</option>
                        <option value="8">Kẹo</option>
                        <option value="6">Khác</option>
                    </select>
                </div>
                <div className="input">
                    <div className="header">
                        Giá:
                    </div>
                     <input defaultValue={oldData.price} onChange={(e)=>{setPrice(e.target.value)}} type="number" name="" id="" />
                </div>
                <div className="input">
                    <div className="header">
                         Giảm Giá(%): 
                    </div>
                   <input defaultValue={oldData.discount} onChange={(e)=>{setDiscount(e.target.value)}} type="number" name="" id="" />
                </div>
                <div className="input">
                    <div className="header">
                        Chi tiết: 
                    </div>
                    <input defaultValue={oldData.detail} onChange={(e)=>{setDetail(e.target.value)}} type="text" name="" id="" />
                </div>
                <div className="input">
                    <div className="header">
                        Mô tả: 
                    </div>
                    <input defaultValue={oldData.description} onChange={(e)=>{setDescription(e.target.value)}} type="text" name="" id="" />
                </div>
                <div className="input">
                    <div className="header">
                        Link ảnh: 
                    </div>
                    <div className="addImage">
                        <input defaultValue={oldData.image_path} onChange={e=>setImage_path(e.target.value)} type="text" />
                    </div>        
                </div>
                <div className="input">
                    
                    <div className="header">
                        Tình trạng:
                    </div>
                    <select defaultValue={oldData.status} onChange={(e)=>{setStatus(e.target.value)}} name="Tình trạng" id="">
                        <option value="Còn hàng">Còn hàng</option>
                        <option value="Hết hàng">Hết hàng</option>
                    </select>
                </div>
               
            </div>
            <button onClick={handleUpdate}>Update</button>
        </div>
    </div>
  )
}
