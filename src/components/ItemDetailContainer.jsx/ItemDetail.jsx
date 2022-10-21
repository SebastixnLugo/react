import React, { useState } from "react";
import "../ItemDetailContainer.jsx/ItemDetail.css";
import Itemcount from "../Itemcount.jsx/Itemcount";
import { Link } from "react-router-dom";
import {useCartContext} from "../../context/CartContext";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


function Item({ datos }) {
  const onAdd = (cantidad) => {
    setIrCarrito(true);
    addProduct(datos, cantidad)
    Swal.fire({
      icon: 'success',
      title: 'Su producto se agregó al carrito ¡muchas gracias!',
      showConfirmButton: false,
      timer: 1500
  })
  };
  const [irCarrito, setIrCarrito] = useState(false);
  const {addProduct} = useCartContext()
  

  return (
    <>
      <div className="container_detail">
            <Link to={`/detalle/${datos.id}`}>
              <div className="img_detail">
                 <img className="imagen_detail" src={datos.image} alt="" />
              </div>
              <div className="info_r">
                 <h3 className="h3_title">{datos.title}</h3>
                 <h5 className="h5_price">${datos.price} USD</h5>
                 {irCarrito ? (
                <Link className="finalizar_compra" to="/Cart">Finalizar su compra</Link>
                ) : (
                <Itemcount initial={1} stock={10} onAdd={onAdd} />
                )}
              </div>
            </Link>
      </div>
    </>
  );
}

export default Item;
