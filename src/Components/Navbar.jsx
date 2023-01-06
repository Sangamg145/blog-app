import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Pages/index.css";
import { useSelector, useDispatch } from "react-redux";
import auth from "../store/action/auth";
export default function Navbar() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user?.data);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar">
      <div className="nav-container">
      <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/"
          >
        <div className="nav-logo">
          <img src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png" />
        </div>
        </Link>
        <div className="nav-links">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/?art"
          >
            <h5>Art</h5>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/?tech"
          >
            <h5>Tech</h5>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/?science"
          >
            <h5>Science</h5>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/?design"
          >
            <h5>Design</h5>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/?food"
          >
            <h5>Food</h5>
          </Link>
          {user ? (
            <>
              <h5>Hello, {user?.name}</h5>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <h5 onClick={() => dispatch(auth.logout(navigate))}>Logout</h5>
              </Link>

              <Link
                style={{
                  textDecoration: "none",
                  color: "blue",
                  backgroundColor: "#faf943",
                  borderRadius: 50,
                  width: 50,
                  height: 35,
                  marginTop: -15,
                  paddingTop: 15,
                  textAlign: "center",
                }}
                to="/create-post"
              >
                <h5>Write</h5>
              </Link>
            </>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              <h5>Login</h5>
            </Link>
          )}
        </div>
        <div className="nav-links-menu" onClick={handleOpen}>
          <span className={open ? "line1-active" : "line1"}></span>
          <span className={open ? "line2-active" : "line2"}></span>
          <span className={open ? "line3-active" : "line3"}></span>
        </div>
      </div>
    </div>
  );
}
