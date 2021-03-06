import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../../../components/footer/Footer";
import { Header } from "../../../components/header/Header";
import { NotAllow } from "../../../components/notAllow/NotAllow";
import { Equipment } from "../equipment/Equipment";
import { AdminHomepage } from "../homepage/AdminHomepage";
import { Menu } from "../menu/Menu";
import { Order } from "../order/Order";
import { Personnel } from "../personnel/Personnel";
import "./home.scss";

export const Home = () => {
  const currentUser = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  return (
    <div>
      <Header></Header>
      {!currentUser.isAdmin ? (
        <NotAllow></NotAllow>
      ) : (
        <div className="container">
          <div className="header">Trang quản lý coffee shop</div>
          <div className="btnContainer">
            <button
              onClick={() => setPage(1)}
              className={page === 1 ? "choose" : " "}
            >
              Trang chủ
            </button>
            <button
              onClick={() => setPage(2)}
              className={page === 2 ? "choose" : " "}
            >
              Người dùng
            </button>
            <button
              onClick={() => setPage(3)}
              className={page === 3 ? "choose" : " "}
            >
              Đơn hàng
            </button>
            <button
              onClick={() => setPage(4)}
              className={page === 4 ? "choose" : " "}
            >
              Menu
            </button>
            <button
              onClick={() => setPage(5)}
              className={page === 5 ? "choose" : " "}
            >
              Thiết bị
            </button>
          </div>
          <div className="tbContainer">
            {page === 1 && <AdminHomepage />}
            {page === 2 && <Personnel />}
            {page === 3 && <Order />}
            {page === 4 && <Menu />}
            {page === 5 && <Equipment />}
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};
