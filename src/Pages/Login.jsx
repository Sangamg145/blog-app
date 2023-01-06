import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./index.css";
import auth from "../store/action/auth";
import { useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [data,setData]=useState({username:"",password:""})
const handleChange=(e)=>{
  const {name,value} = e.target;
  setData({
   ...data,
    [name]: value})
}

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(auth.login(data,navigate))
  }
  return (
    <div className="login">
      <div className="login-box">
        <input type="text" name="username" placeholder="Email" onChange={handleChange} value={data.username} className="form-control" />
        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Password"
          onChange={handleChange}
          className="form-control"
        />

<button type="submit" onClick={handleSubmit} className="btn">
          Login
        </button>
        <p>
          Not a member{" "}
          <Link to="/register">
            <span
              style={{
                color: "rgb(24, 0, 179)",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Register here
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
