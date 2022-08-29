import React from "react";
import "../Footer.jsx/Footer.css";
import logo from "../img/smartking-logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_l">
          <h4 className="footer_h4">Sobre nosotros</h4>
          <p className="footer_p">
            Tienda Chilena exclusivamente de celulares y tecnología. Encuentra
            los mejores precios, una gran variedad de smartphones y un excelente
            servicio de entrega.
          </p>
        </div>

        <div>
          <img src={logo} alt="" />
        </div>

        <div className="footer_r">
          <h4 className="footer_h4">Contacto</h4>
          <img
            src="https://cdn.discordapp.com/attachments/748659559530233911/1013925727336407070/unknown.png"
            alt=""
          />
        </div>
      </div>

      <div className="footer_debajo">
        <p>© 2022 SmartKING Chile.</p>
        <img className="img_debajo" src="https://cdn.discordapp.com/attachments/748659559530233911/1013923361023348786/unknown.png" alt="" />
      </div>
    </>
  );
};

export default Footer;
