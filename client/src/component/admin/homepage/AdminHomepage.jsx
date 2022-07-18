import React, { useState } from 'react'
import socketIOClient  from 'socket.io-client'
import { useEffect } from 'react'
import { useRef } from 'react'
import './adminhomepage.scss'
import { useSelector } from 'react-redux'
import { NotAllow } from '../../../components/notAllow/NotAllow'
const host = 'http://localhost:1234'

export const AdminHomepage = () => {
  const currentUser = useSelector((state) => state.user);
  const [mess, setMess] = useState([{}])
  const [message,setMessage] = useState('')
  const [id,setId] = useState()
  const socketRef = useRef()
  // const messageEnd = useRef();
  const sendMessage = () => {
    // console.log(id)
    if(message !== null) {
      const msg = {
        content: message, 
        id: id||0
      }
      socketRef.current.emit('sendDataClient', msg)
      setMessage('')
    }
    console.log(mess)
  }
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host)
    socketRef.current.on('connect', () => {
     setId(socketRef.current.id)
  })
    socketRef.current.on('sendDataServer', dataGot => {
      setMess(oldMsgs => [...oldMsgs, dataGot.data])
    })

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      sendMessage()
    }
  }
  return (
    <div className='AdHContainer'>
      {!currentUser.isAdmin ? (
        <NotAllow></NotAllow>
      ) : (
       <>
       <div className='messageContainer'>
        {mess &&mess.map((m, index) => 
          <div key={index} className={`${m.id === id ? 'your-message' : 'other-people'} chat-item`}>
           <div className='userID'>
            {m.content && 
            <div>user_id: {m.id}</div>} 
           </div>
           <div className='content'>
           {m.content}
            </div>
          </div>
        )}
      </div>
      <div className="send-box">
          <textarea 
            value={message}  
            onKeyDown={onEnterPress}
            onChange={handleChange} 
            placeholder="Nhập tin nhắn ..." 
          />
          <button onClick={sendMessage}>
            Send
          </button>
      </div>
       </>
      )}
      
    </div>
    
  )
}
