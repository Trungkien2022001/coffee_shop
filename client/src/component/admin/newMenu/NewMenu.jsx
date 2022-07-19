import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { NotAllow } from '../../../components/notAllow/NotAllow'
import './newMenu.scss'
export const NewMenu = () => {
    // const [image, setImage] = useState('')
    const currentUser = useSelector((state) => state.user);
    const [name, setName] = useState('')
    const [productImage, setProductImage] = useState([]);
    const [files, setFiles] = useState("");
    const [category, setCategory] = useState(1)
    const [discount, setDiscount] = useState(0)
    const [price, setPrice] = useState(0)
    const [detail, setDetail] = useState('')
    const [description, setDescription] = useState('')
    const handleAddImage = (e)=>{
        const [file] = document.querySelector('div.addImage input').files
        const url = URL.createObjectURL(file)
        setProductImage([...productImage, url])
        setFiles(e.target.files)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        async function uploadImage(){
            try {
                await Promise.all(
                    Object.values(files).map(async (file) => {
                        const data = new FormData();
                        data.append("file", file);
                        data.append("upload_preset", "upload");
                        await axios.post(
                            "https://api.cloudinary.com/v1_1/trungkien2022001/image/upload",
                            data
                        ).then(res=>{
                            console.log(res.data.url)
                            let data = {
                                name: name,
                                category: category,
                                discount: discount,
                                price: price,
                                detail: detail,
                                description: description,
                                status: "Con hang",
                                image_path:res.data.url
                            }
                            axios.post('/admin/create_menu', data).then(res=>{
                                console.log("res", res);
                                if(res.data.err === false) {
                                    window.location = '../';
                                }
                            }
                        )
                        });
                    })
                );
            } catch (err) {
                console.log(err);
            }
        }
        uploadImage()
       
        
    }
    return (
        <div>
            {!currentUser.isAdmin ? (
        <NotAllow></NotAllow>
      ) : (
        <div className="container1">
                <div className="lkrtrlkht">
                    <Link to={'/admin'}>Quay về trang chủ</Link>
                </div>
                <div className='information'>
                    <div className="input">
                        <div className="header">
                            Tên Menu: 
                        </div>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" name="" id="" />
                    </div>
                    <div className="input">
                        
                        <div className="header">
                            Loại Menu:
                        </div>
                        <select onChange={(e)=>{setCategory(e.target.value)}} name="Hình thức thanh toán" id="">
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
                         <input onChange={(e)=>{setPrice(e.target.value)}} type="number" name="" id="" />
                    </div>
                    <div className="input">
                        <div className="header">
                             Giảm Giá(%): 
                        </div>
                       <input  onChange={(e)=>{setDiscount(e.target.value)}} type="number" name="" id="" />
                    </div>
                    <div className="input">
                        <div className="header">
                            Chi tiết: 
                        </div>
                        <input  onChange={(e)=>{setDetail(e.target.value)}} type="text" name="" id="" />
                    </div>
                    <div className="input">
                        <div className="header">
                            Mô tả: 
                        </div>
                        <input onChange={(e)=>{setDescription(e.target.value)}} type="text" name="" id="" />
                    </div>
                    <div className="input">
                        <div className="header">
                            Tải ảnh lên: 
                        </div>
                        <div className="addImage">
                            <input  onChange={(e)=>handleAddImage(e)} type="file" />
                        </div>
                        
                    </div>
                   
                </div>
                <button onClick={e=>handleSubmit(e)}>Thêm Menu</button>
            </div>
      )}
           
        </div>
    )
}
