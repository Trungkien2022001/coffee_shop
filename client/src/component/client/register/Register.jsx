import React from "react";
import { useState } from "react";
import axios from "axios";
import "./register.scss";

export const Register = () => {
  // const [data, setData] = useState();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleRegister = () => {
    axios.post("auth/register", {
      password,
      repassword,
      phone,
      name,
      username,
      email
    });
  };

  return (
    <div className="container">
      <div className="register-form">
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full Name"
        />
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
        <input
          type="text"
          onChange={(e) => {
            setRepassword(e.target.value);
          }}
          placeholder="Repassword"
        />
        <input
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="Phone"
        />
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

