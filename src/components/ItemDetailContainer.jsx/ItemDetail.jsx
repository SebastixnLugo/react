import React, { useState } from "react";
import "../ItemDetailContainer.jsx/ItemDetail.css";
import Itemcount from "../Itemcount.jsx/Itemcount";
import { Link } from "react-router-dom";
import {useCartContext} from "../../context/CartContext";

function Item({ datos }) {
  const [irCarrito, setIrCarrito] = useState(false);
  const {addProduct} = useCartContext()

  const onAdd = (cantidad) => {
    setIrCarrito(true);
    addProduct(datos, cantidad)
  };


  return (
    <>
      <div className="container_detail">
        <div className="container_box_detail">
          <div className="caja_producto_detail">
            <Link to={`/detalle/${datos.id}`}>
              <img className="imagen_detail" src={datos.image} alt="" />

              <h3 className="h3_title">{datos.title}</h3>
              <h5 className="h5_price">${datos.price} USD</h5>
              {irCarrito ? (
                <Link to="/Cart">Finalizar su compra</Link>
              ) : (
                <Itemcount initial={1} stock={10} onAdd={onAdd} />
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
