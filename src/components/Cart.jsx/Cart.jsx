import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from "../Itemcart.jsx/Itemcart"

const Cart = () => {
  const { cart, precioTotal } = useCartContext()

  if (cart.length === 0) {
    return (
      <>
      <p className='p_cart_empty'>Tu carrito está vacío</p>
      <Link className='p_cart_empty_product' to="/">Vea nuestros productos disponibles</Link>
      </>
    )
  }

  return (
    <>
    {
    cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p className='p_cart'>Precio total: {precioTotal()}</p>
    
    </>
  )
}

export default Cart