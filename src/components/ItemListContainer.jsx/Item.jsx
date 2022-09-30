import React from "react";
import "../ItemListContainer.jsx/Item.css";
import { Link } from "react-router-dom";


function Item({ info }) {
  return (
    <>
      <div className="container">
        <div className="container_box">
          <div className="caja-producto">
            <Link to={`/detalle/${info.id}`}>
              <img className="imagen-producto" src={info.image} alt="" />
              <div className="detalles-producto">
                <h3 className="h3_title">{info.title}</h3>
                <h5 className="h5_price">${info.price} USD</h5>
                <button className="btn_info">Más información</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
