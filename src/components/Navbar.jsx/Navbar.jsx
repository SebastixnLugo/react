import React from "react";
import "../Navbar.jsx/Navbar.css";
import logo from "../img/smartking-logo.png";
import user from "../img/user.png";
import mail from "../img/mail.png";
import phone from "../img/phone.png";
import Cartwidget from "../Cartwidget.jsx/Cartwidget";


function Navbar() {
  const NavBarItems = ["Celulares", "Smartwaches"]
  
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
            {NavBarItems.map((item)=> 
            <li key={item}><a className="a_navbar" href="#">{item}</a></li>)}
          </ul>
        </div>

        
        <img className="logo_header" src={logo} alt="" />
        <div>
          <img className="r_header" src={user} alt="" />
          <Cartwidget/>
        </div>
      </header>

      <section className="banner">
        <img src="https://cdn.discordapp.com/attachments/748659559530233911/1008047662240632892/banner-xiaomi_.png" alt="" />
      </section>

      

      
    </>
  );
}

export default Navbar;
