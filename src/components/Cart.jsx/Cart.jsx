// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useCartContext } from '../../context/CartContext'
// import { addDoc, collection, getFirestore} from "firebase/firestore"
// import ItemCart from "../Itemcart.jsx/Itemcart"
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'


// const handleClickComprar = () => {
//   const db = getFirestore()
//   const ordenCollection = collection(db, "ordenes")
//   addDoc(ordenCollection, orden)
//   .then(({id}) => console.log(id))
//   Swal.fire({
//     icon: 'success',
//     title: 'Su orden ha sido generada ¡muchas gracias!',
//     showConfirmButton: false,
//     timer: 1500
// })
// }

// // function handleClickComprar()

// //   const orden = {
// //     comprador: {
// //       nombre: nombre,
// //       email: email,
// //       telefono: tel,
// //     },
// //     items: cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity: product.quantity})),
// //     total: precioTotal(),
// //   }

// //   if (!nombre || !tel || !email) return;



// // const Cart = () => {
// //   const { cart, precioTotal } = useCartContext()

// //   const [nombre, setNombre] = useState("")
// //   const [tel, setTel] = useState("")
// //   const [email, setEmail] = useState("")
// //   const [idCompra, setId] = useState("")

  
//   if (cart.length === 0) {
//     return (
//       <>
//       <p className='p_cart_empty'>Tu carrito está vacío</p>
//       <Link className='p_cart_empty_product' to="/">Vea nuestros productos disponibles</Link>
//       </>
//     )
//   }

//   return (
//     <>
//     {
//     cart.map(product => <ItemCart key={product.id} product={product} />)
//     }
    
//     <div className='total'>
//     <p className='p_cart_total'>Precio total: ${precioTotal()}</p>
//     <button className='btn_orden' onClick={handleClick}>Generar su orden</button>
//     </div>
//     </>
//   )


// const db = getFirestore();
//   const collectionRef = collection (db, "productos");

  
//   addDoc(collectionRef, orden).then(({id}) => setIdCompra(id));

//   return (
//     <div>
//       <p> Su id de compra es: {idCompra}</p>
//         <h1>Complete los datos para finalizar su compra</h1>
//         <input onChange={(e) => setNombre(e.target.value)} type={"Text"} placeholder={"Ingrese su nombre"}></input>
//         <br />

//         <input onChange={(e) => setTel(e.target.value)} type={"tel"} placeholder={"Ingrese su télefono"}></input>
//         <br />

//         <input onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Ingrese email"}></input>
//         <br />
//         <br />
//         <button onClick={handleClickComprar}>Comprar</button>
//     </div>
//   )

  

// export default Cartn