import React from 'react'
import "../Itemcart.jsx/Itemcart.css"
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({product}) => {
const {removeProduct} = useCartContext()
  return (
    <div className = "itemCart">
    < img src = {product.image} alt = { product.title } />
    < div >
         <p className='p_cart'> Título : { product.title } </p>
         <p className='p_cart'> Cantidad : { product.quantity } </ p>
         <p className='p_cart'> Precio u .: { product.price } </p>
         <p className='p_cart'> Subtotal : ${product.quantity * product.price} </ p >
         < button className='eliminar_cart' onClick={() => removeProduct(product.id)} > Eliminar </button>
    </div>
   </div>
  )
}

export default ItemCart