import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../redux/userSlice";
export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const handleLogout = ()=>{
    alert('Đăng xuất thành công')
    dispatch(userSlice.actions.logout())  
  }
  return (
    <div className="header-container">
      <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
        <div className="name">BK COFFEE</div>
      </Link>

      <div className="title">
        <div>
          Hãy đến với bk coffee, bạn sẽ tận hưởng những thứ tốt đẹp nhất
        </div>
        {user.name !=='Guest'? <div className="hello">Hello, {user.name}</div>:<>One love, one future</> }
      </div>
      <div className="btn">
        
        {user.name ==='Guest' ? (
          <Link style={{ color: "black", marginRight: "20px" }} to="/login">
            <div className="cartBtn">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </Link>
        ) : (
          <div className="cartBtn" style={{ marginRight: "20px" }}>
            <Link to={'/user'}>
              <FontAwesomeIcon icon={faUser} style={{ color: "red" }} />
            </Link>
            <div className="popupUser">
              {user.isAdmin ? (
                <Link style={{ color: "black", textDecoration: "none" }} to={"/admin"}>
                  <div className="title">Trang quản lý</div>
                </Link>
              ) : (
                <></>
              )}
              <div onClick={handleLogout} className="title">Đăng xuất</div>
            </div>
          </div>
        )}

        <Link style={{ color: "black" }} to="/cart">
          <div className="cartBtn1">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </Link>
      </div>
    </div>
  );
};
