import React from "react";
import "../ItemDetailContainer.jsx/ItemDetail.css";

const ItemDetail = ({ datos }) => {
  return (
    <div className="container">
      <div className="detalles">
        <img className="detalle_img" src={datos.image} alt="" />
        <div className="detalle_contenido">
          <h3>{datos.title}</h3>
          <h5>{datos.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
