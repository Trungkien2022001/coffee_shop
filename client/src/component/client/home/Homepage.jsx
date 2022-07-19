import React from 'react'
import { Header } from '../../../components/header/Header'
import { Footer } from '../../../components/footer/Footer'
import { Link } from 'react-router-dom'
import './Homepage.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import socketIOClient from 'socket.io-client'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Slider } from '../../../components/slider/Slider'
import Stack from "@mui/material/Stack";
import { Pagination } from '@mui/material'
const host = 'http://localhost:1234'

export const Homepage = () => {
  const [numPage, setNumpage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const currentUser = useSelector(state => state.user)
  const [type, setType] = useState(0)
  const [productList, setProductList] = useState([])
  const [check, setCheck] = useState(true)
  const [mess, setMess] = useState([{}])
  const [message, setMessage] = useState('')
  const socketRef = useRef()
  const messageRef = useRef(null)
  const sendMessage = () => {
    if (message !== '') {
      const msg = {
        content: message,
        user: currentUser.name || 'Guest'
      }
      socketRef.current.emit('sendDataClient', msg)
      setMessage('')
    }
    console.log(mess)
  }
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host)
    socketRef.current.on('connect', () => {
    })
    socketRef.current.on('sendDataServer', dataGot => {
      setMess(oldMsgs => [...oldMsgs, dataGot.data])
    })

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  useEffect(()=>{
    messageRef.current?.scrollIntoView()
  },[mess])
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage()
    }
  }
  useEffect(() => {
    const getData = async () => {
      await axios.get(`/admin/getMenus?type=${type}&page=${currentPage}`).then(res=>{
        setProductList(res.data.data.result)
        setNumpage(res.data.data.count)
      })
    }
    getData()
    window.scrollTo(0, 0)
  }, [type,currentPage])
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <div className="product-container padding___main">
        <div className="container-header">
          <div className="item" onClick={() => {setType(0); setCurrentPage(1)}}>Tất cả</div>
          <div className="item" onClick={() => {setType(1); setCurrentPage(1)}}>Cafe</div>
          <div className="item" onClick={() => {setType(2); setCurrentPage(1)}}>Cafe pha phin</div>
          <div className="item" onClick={() => {setType(3); setCurrentPage(1)}}>Trà</div>
          <div className="item" onClick={() => {setType(4); setCurrentPage(1)}}> Trà sữa</div>
          <div className="item" onClick={() => {setType(5); setCurrentPage(1)}}> Sinh tố</div>
          <div className="item" onClick={() => {setType(7); setCurrentPage(1)}}>Bánh kẹo</div>
          <div className="item" onClick={() => {setType(6); setCurrentPage(1)}}>Khác</div>
        </div>
        <div className="product-header">
          Danh sách sản phẩm
        </div>
        <div className="product">
          {productList && productList.length && productList.map((item, key) => (
            <Link key={key} style={{ color: 'black', textDecoration: 'none' }} to={`/product/${item.id}`}>
              <div className="product-item">
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

      {check ?
        <div onClick={() => setCheck(!check)} className="chat">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/512px-Facebook_Messenger_logo_2020.svg.png?20220118041828" alt="" />
        </div>
        :
        <div className="chatbox">
          <div className="chat-header">
            <div className="title">
              Bạn cần giúp gì ?
            </div>
            <div onClick={() => setCheck(!check)} className="chat-header-ctn">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          <div className="chat-container">
            {mess && mess.map((m, index) =>
              <div key ={index}>
                {m.user === currentUser.name?
                  <div className='user-container'>
                    <div className="user">
                      <div className="message">
                        {m.content}
                      </div>
                      <div className="name">
                        {m.user}
                      </div>
                    </div>
                  </div>
                  :
                  <div className='other-container'>
                    <div className="other">
                      <div className="name">
                      {m.user}
                      </div>
                      <div className="message">
                      {m.content}
                      </div>
                    </div>
                  </div>
                }
              </div>
            )}

              <div ref = {messageRef}/>
          </div>
          <div className="input">
            <input onKeyDown={onEnterPress} value={message}   onChange={handleChange} type="text" placeholder='Nhập tin nhắn' />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>
      }
      <div className='page' style={{display: 'flex', justifyContent:'center', margin:'30px 10px'}}>
        <Stack className="stack" spacing={2}>
            <Pagination
              count={numPage}
              page={currentPage}
              onChange={(e) => setCurrentPage(parseInt(e.target.textContent))}
            />
          </Stack>
      </div>
      <Footer></Footer>
    </div>
  )
}
