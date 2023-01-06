import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import auth from "../store/action/auth";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [data,setData]=useState({username:"",email:"",password:"",})
const handleChange=(e)=>{
  const {name,value} = e.target;
  setData({
   ...data,
    [name]: value})
}
const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(auth.register(data,navigate))
}
  return (
    <div className="login">
      <div className="login-box">
      <input type="text" name="username" onChange={handleChange} placeholder="Name" className="form-control" />
        <input type="text" name="email" onChange={handleChange} placeholder="Email" className="form-control" />
        <input
          type="password"
          name="password" onChange={handleChange}
          placeholder="Password"
          className="form-control"
        />

        <button onClick={handleSubmit} type="submit" className="btn">
          Register
        </button>

        <p>
          Already a member{" "}
          <Link to="/login">
            <span
              style={{
                color: "rgb(24, 0, 179)",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login here
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
