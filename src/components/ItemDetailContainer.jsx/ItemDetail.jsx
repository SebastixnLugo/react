import React from "react";
import "../ItemDetailContainer.jsx/ItemDetail.css";
import { Link } from "react-router-dom";

function Item({ datos }) {
  return (
    <>
      <div className="container_detail">
        <div className="container_box_detail">
          <div className="caja-producto_detail">
            <Link to={`/detalle/${datos.id}`}>
              <img className="imagen_detail" src={datos.image} alt="" />
              <div className="detalles_detail">
                <h3>{datos.title}</h3>
                <h5>{datos.price}</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
