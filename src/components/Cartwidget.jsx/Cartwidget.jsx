import React from 'react'
import Carritoimagen from '../img/shopping-cart.png'
import {useCartContext} from "../../context/CartContext"

function Cartwidget() {
  const {productosTotales} = useCartContext()

  return (
    <>
    <div className='cart'>
        <img className="cart_img" src={Carritoimagen} alt="" style={{width: "39px"}}></img>
        <span className='cart_n'>{ productosTotales() || ""}</span>
    </div>
    
    </>
  )
}

export default Cartwidget