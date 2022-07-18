import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.scss";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";

const Login = () => {
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({});
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleLogin = () => {
    axios
      .post("auth/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data[0]);
      });


  };
 
  return (
    <div>
      <Header></Header>
      <div className="container">
          <div className="login-form">
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            placeholder="Username"
          />
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  
  );
};

export default Login;
