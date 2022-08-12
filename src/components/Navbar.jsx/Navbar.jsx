import React from "react";
import "../Navbar.jsx/Navbar.css";
import logo from "../img/smartking-logo.png";
import user from "../img/user.png";
import mail from "../img/mail.png";
import phone from "../img/phone.png";
import Cartwidget from "../Cartwidget.jsx/Cartwidget";


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
          <Cartwidget/>
        </div>
      </header>

      <section>
        <img src="https://img.freepik.com/foto-gratis/mujer-comprobando-tiempo-su-telefono_53876-129658.jpg?w=2000" alt="" />
      </section>
    </>
  );
}

export default Navbar;
