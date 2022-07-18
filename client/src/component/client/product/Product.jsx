import { faCheck, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Footer } from "../../../components/footer/Footer";
import { Header } from "../../../components/header/Header";
import "./Product.scss";
export const Product = () => {
  return (
    <div>
        <Header/>
      <div className="product-container padding___main">
        {/* <div className="product-header">Cafe thượng hạng</div> */}
        <div className="product">
          <div className="product-left">
            <img
              src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg"
              alt=""
            />
          </div>
          <div className="product-right">
            <div className="productName">Cafe thượng hạng</div>
            <div className="productPrice">Giá: 30000đ</div>
            <div className="productDetail">
                <div className="icon">
                <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="content">
                    Cafe làm từ lá cấy sbeoi rhjrigh
                </div>
            </div>
            <div className="productDesc">
                <div className="icon">
                <FontAwesomeIcon icon={faCommentAlt} />
                </div>
                <div className="content">
                    Phaanf moo tar eoigrgjdoigjdfgdfgfd
                </div>
            </div>
            <div className="productDiscount">
                Giảm giá: 8%
            </div>
            <div className="productQuantity">
                <div className="title">Số lượng: </div>
                <input type="number" placeholder="số lượng" defaultValue={1} max='100' min={1}/>
            </div>
            <div className="productSubmit">
                <button>Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
