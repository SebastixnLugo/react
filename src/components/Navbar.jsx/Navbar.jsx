import React from "react";
import "../Navbar.jsx/Navbar.css";
import logo from "../img/smartking-logo.png";
// import user from "../img/user.png";
import mail from "../img/mail.png";
import phone from "../img/phone.png";
import Cartwidget from "../Cartwidget.jsx/Cartwidget";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="after_header">
        <div className="after_header_container">
          <img className="img_after" src={mail} alt="" />
          <p className="p_after">ventas@smartking.cl</p>
        </div>

        <div className="after_header_container">
          <img src={phone} alt="" />
          <p className="p_after">+56 9 5169 4292</p>
        </div>
      </div>

      <header>
        <div className="header_container">
          <ul className="nav_header">
            <li>
              <NavLink className="nav_link" to="/categoria/celulares">
                Celulares
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/categoria/smartwatch">
                Smartwatch
              </NavLink>
            </li>
          </ul>
        </div>

        {/* HEADER MOBILE */}
        <div className="container_nav_header_mobile">
          <ul className="nav_header_mobile">
            <li>
              <NavLink className="nav_link" to="/categoria/celulares">
                Celulares
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/categoria/smartwatch">
                Smartwatch
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className="logo_header" to="/">
          <img src={logo} alt="" />
        </NavLink>

        <div>
          <NavLink to="/cart">
            <Cartwidget />
          </NavLink>
        </div>
      </header>

      <div className="banner_container">
        <a href="index.html">
          <img
            className="img_banner"
            src="https://cdn.discordapp.com/attachments/748659559530233911/1008047662240632892/banner-xiaomi_.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
}

export default Navbar;
