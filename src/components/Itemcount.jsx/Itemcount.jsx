import "../Itemcount.jsx/Itemcount.css";
import React, { useState } from "react";

export const Itemcount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);

  return (
    <div id="btn_count" className="counter">
      <button className="btn_count" disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button className="btn_count" disabled={count >= stock} onClick={() => setCount(count + 1)}>+</button>
      <div>
      <button disabled={stock <=0} onClick={() => onAdd(count)} className="btn_buy">Agregar al carrito</button>
      
      </div>
    </div>
  );
};

export default Itemcount;
