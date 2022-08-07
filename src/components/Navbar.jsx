import React from "react";
import "../components/Navbar.css";
import logo from "../components/img/smartking-logo.png";
import carrito from "../components/img/shopping-cart.png";
import user from "../components/img/user.png";
import mail from "../components/img/mail.png";
import phone from "../components/img/phone.png";

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
        <div>
          <ul className="nav_header">
            <li>
              <a href="/">Celulares</a>
            </li>
            <li>
              <a href="/">Smartwaches</a>
            </li>
          </ul>
        </div>

        <img className="logo_header" src={logo} alt="" />

        <div>
          <img className="r_header" src={user} alt="" />
          <img className="r_header" src={carrito} alt="" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
