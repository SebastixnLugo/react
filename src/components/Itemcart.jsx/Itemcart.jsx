import React from 'react'
import "../Itemcart.jsx/Itemcart.css"
import { useCartContext } from '../../context/CartContext'

const Itemcart = ({product}) => {
const {removeProduct} = useCartContext()
  return (
    <div className = "itemCart">
    < img src = {product.image} alt = { product.title } />
    < div >
         <p> Título : { product.title } </p>
         <p> Cantidad : { product.quantity } </ p>
         <p> Precio u .: { product.price } </p>
         <p> Subtotal : ${product.quantity * product.price} </ p >
         < button onClick={() => removeProduct(product.id)} > Eliminar </button>
    </div>
   </div>
  )
}

export default Itemcart