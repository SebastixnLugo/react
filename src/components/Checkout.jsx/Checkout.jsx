// import React, {useState} from "react";
// import { collection, getFirestore, addDoc } from "firebase/firestore";



// export default function Checkout  () {
//   const [nombre, setNombre] = useState("")
//   const [tel, setTel] = useState("")
//   const [email, setEmail] = useState("")
//   const [idCompra, setId] = useState("")

//   const pedido = {
//     buyer: {nombre, tel, email},
//     carrito: [
//         { id: 101, title: "celular samsung", price: 100},
//         { id: 101, title: "celular samsung", price: 100},
//     ],
//     total: 1000,
//   };

//   const db = getFirestore();
//   const collectionRef = collection (db, "productos");

//   addDoc(collectionRef, pedido).then(({id}) => setIdCompra(id));
//   function handleClickComprar() {

//   }


//   return (
//     <div>
//         <p>id de compra: {idCompra}</p>
//         <h1>Complete los datos para finalizar su compra</h1>
//         <input onChange={(e) => setNombre(e.target.value)} type={"Text"} placeholder={"Ingrese su nombre"}></input>
//         <br />

//         <input onChange={(e) => setTel(e.target.value)} type={"tel"} placeholder={"Ingrese su télefono"}></input>
//         <br />

//         <input onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Ingrese email"}></input>
//         <br />
//         <br />
//         <button onClick={}>Comprar</button>
//     </div>
//   )
// }

// export default Checkout