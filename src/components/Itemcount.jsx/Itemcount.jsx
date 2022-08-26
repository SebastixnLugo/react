import "../Itemcount.jsx/Itemcount.css";
import React, { useState } from "react";

export const Itemcount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);

  return (
    <div className="counter">
      <button disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={() => setCount(count + 1)}>+</button>
      <div>
      <button disabled={stock <=0} onClick={() => onAdd(count)} className="btn_buy">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Itemcount;
