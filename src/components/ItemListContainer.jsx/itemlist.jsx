import Itemcount from "../Itemcount.jsx/Itemcount.jsx";
import React from "react";

const celulares = [
    { id:1, image: "https://www.smartking.cl/wp-content/uploads/2021/12/Samsung-Galaxy-M62_03.jpg", title: "Samsung Galaxy M62 256GB/8GB", price: "$424.900", btn: <Itemcount/>},

    { id:2, image: "https://www.smartking.cl/wp-content/uploads/2021/10/Xiaomi-Redmi-Note-10-5G_01.jpg", title: "Xiaomi Redmi Note 10 5G", price: "$249.900", btn: <Itemcount/>},

    { id:3, image: "https://www.smartking.cl/wp-content/uploads/2021/10/OnePlus-9-Pro_01.jpg", title: "OnePlus 9 Pro 5G 256GB/12GB", price: "$694.900", btn: <Itemcount/>},
]


const ItemList = () => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} productos`)
  }  

  return (
    <>
    <Itemcount initial={1} stock={8} onAdd={onAdd} />
    </>
  )
}

export default ItemList