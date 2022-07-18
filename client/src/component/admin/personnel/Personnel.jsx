import React from 'react'
import { useSelector } from 'react-redux';
import { NotAllow } from '../../../components/notAllow/NotAllow';
import './personnel.scss'
export const Personnel = () => {
  const currentUser = useSelector((state) => state.user);
  return (
    <div>
      {!currentUser.isAdmin ? (
        <NotAllow></NotAllow>
      ) : (
        <div className="container">
        Trang quản lý user
      </div>
      )}
      
    </div>
  )
}
