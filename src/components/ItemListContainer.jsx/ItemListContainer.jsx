import React, { useState, useEffect } from "react";
import Itemcount from "../Itemcount.jsx/Itemcount";
import Item from "./Item";
import ItemList from "./ItemList";


const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} productos`);
  };
const celulares = [
  {
    id: 1,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314127093059604/Samsung-Galaxy-M62_03.jpg",
    title: "Samsung Galaxy M62 256GB/8GB",
    price: "$424.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },

  {
    id: 2,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314441489690664/Xiaomi-Redmi-Note-10-5G_01.jpg",
    title: "Xiaomi Redmi Note 10 5G",
    price: "$249.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },

  {
    id: 3,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314641608327279/OnePlus-9-Pro_01.jpg",
    title: "OnePlus 9 Pro 5G 256GB/12GB",
    price: "$694.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },

  {
    id: 4,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314641608327279/OnePlus-9-Pro_01.jpg",
    title: "OnePlus 9 Pro 5G 256GB/12GB",
    price: "$694.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },
];

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const getDatos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(celulares);
      }, 2000);
    });
    getDatos.then(res => setDatos(res))
  }, []);



  return (
    <>
      <ItemList datos={datos} />
    </>
  );
};

export default ItemListContainer;
