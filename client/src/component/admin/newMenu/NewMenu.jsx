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
                    <Link to={'/admin'}>Quay v??? trang ch???</Link>
                </div>
                <div className='information'>
                    <div className="input">
                        <div className="header">
                            T??n Menu: 
                        </div>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" name="" id="" />
                    </div>
                    <div className="input">
                        
                        <div className="header">
                            Lo???i Menu:
                        </div>
                        <select onChange={(e)=>{setCategory(e.target.value)}} name="H??nh th???c thanh to??n" id="">
                            <option value="1">C?? ph??</option>
                            <option value="2">C?? ph?? pha phin</option>
                            <option value="3">Tr??</option>
                            <option value="4">Tr?? s???a</option>
                            <option value="5">Sinh t???</option>
                            <option value="7">B??nh</option>
                            <option value="8">K???o</option>
                            <option value="6">Kh??c</option>
                        </select>
                    </div>
                    <div className="input">
                        <div className="header">
                            Gi??:
                        </div>
                         <input onChange={(e)=>{setPrice(e.target.value)}} type="number" name="" id="" />
                    </div>
                    <div className="input">
                        <div className="header">
                             Gi???m Gi??(%): 
                        </div>
                       <input  onChange={(e)=>{setDiscount(e.target.value)}} type="number" name="" id="" />
                    </div>
                    <div className="input">
                        <div className="header">
                            Chi ti???t: 
                        </div>
                        <input  onChange={(e)=>{setDetail(e.target.value)}} type="text" name="" id="" />
                    </div>
                    <div className="input">
                        <div className="header">
                            M?? t???: 
                        </div>
                        <input onChange={(e)=>{setDescription(e.target.value)}} type="text" name="" id="" />
                    </div>
                    <div className="input">
                        <div className="header">
                            T???i ???nh l??n: 
                        </div>
                        <div className="addImage">
                            <input  onChange={(e)=>handleAddImage(e)} type="file" />
                        </div>
                        
                    </div>
                   
                </div>
                <button onClick={e=>handleSubmit(e)}>Th??m Menu</button>
            </div>
      )}
           
        </div>
    )
}
