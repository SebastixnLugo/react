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
                <h3>{info.title}</h3>
                <h5>{info.price}</h5>
                {info.btn}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
