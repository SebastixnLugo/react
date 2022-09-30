import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore} from "firebase/firestore"
import ItemCart from "../Itemcart.jsx/Itemcart"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Cart = () => {
  const { cart, precioTotal } = useCartContext()

  const orden = {
    comprador: {
      nombre: "Osvaldo",
      email: "osvaldo.coderhouse@gmail.com",
      celular: "1122559900",
      direccion: "Calle Falsa 123"
    },
    items: cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: precioTotal(),
  }

  const handleClick = () => {
    const db = getFirestore()
    const ordenCollection = collection(db, "ordenes")
    addDoc(ordenCollection, orden)
    .then(({id}) => console.log(id))
    Swal.fire({
      icon: 'success',
      title: 'Su orden ha sido generada ¡muchas gracias!',
      showConfirmButton: false,
      timer: 1500
  })
  }

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
    
    <div className='total'>
    <p className='p_cart_total'>Precio total: ${precioTotal()}</p>
    <button className='btn_orden' onClick={handleClick}>Generar su orden</button>
    </div>
    
    
    
    
    </>
  )
}

export default Cart