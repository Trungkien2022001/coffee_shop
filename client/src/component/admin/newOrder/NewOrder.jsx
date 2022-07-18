import React from 'react'
import { useSelector } from 'react-redux';
import { NotAllow } from '../../../components/notAllow/NotAllow';
import './newOrder.scss'
export const NewOrder = () => {
    const currentUser = useSelector((state) => state.user);
    return (
        <div>
            {!currentUser.isAdmin ? (
        <NotAllow></NotAllow>
      ) : (
        <div className="container">
        <div className='information'>
            <div className="name">
                <div className="header">
                    Tên khách hàng: 
                </div>
                <input type="text" name="" id="" />
            </div>
            <div className="name">
                <div className="header">
                Ghi chú: 
                </div>
               <input type="text" name="" id="" />
            </div>
            <div className="name">
                <div className="header">
                Tổng số tiền: 
                </div>
                <input type="number" name="" id="" />
            </div>
            <div className="name">
                <div className="header">
                     Hình thức thanh toán:
                </div>
               
                <select name="Hình thức thanh toán" id="">
                    <option value="Tiền mặt">Tiền mặt</option>
                    <option value="MoMo">MoMo</option>
                    <option value="ATM">ATM</option>
                </select>
            </div>
            
        </div>

    </div>
      )}
           
        </div>
    )
}
