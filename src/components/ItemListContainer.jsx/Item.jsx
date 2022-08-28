import React from "react";
import "../ItemListContainer.jsx/Item.css";

function Item({ info }) {
  return (
    <>
      <div className="container">
        <div className="caja-producto">
          <div className="imagen-producto">
            <img src={info.image} alt="" />
          </div>
          <div className="detalles-producto">
            <h3>{info.title}</h3>
            <h5>{info.price}</h5>
            {info.btn}
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
