import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import Itemcount from '../Itemcount.jsx/Itemcount'
import { useParams } from "react-router-dom";


const onAdd = (cantidad) => {
  console.log(`Compraste ${cantidad} productos`);
};
const productos = [
  {
    id: 1,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314127093059604/Samsung-Galaxy-M62_03.jpg",
    title: "Samsung Galaxy M62 256GB/8GB",
    category: "celulares",
    price: "$424.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },

  {
    id: 2,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314441489690664/Xiaomi-Redmi-Note-10-5G_01.jpg",
    title: "Xiaomi Redmi Note 10 5G",
    category: "celulares",
    price: "$249.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },

  {
    id: 3,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314641608327279/OnePlus-9-Pro_01.jpg",
    title: "OnePlus 9 Pro 5G 256GB/12GB",
    category: "celulares",
    price: "$694.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },

  {
    id: 4,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314641608327279/OnePlus-9-Pro_01.jpg",
    title: "OnePlus 9 Pro 5G 256GB/12GB",
    category: "celulares",
    price: "$694.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },

  {
    id: 5,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013888401860218950/www.smartking.cl-huawei-watch-gt-huawei-watch-gt-01.jpg",
    title: "Huawei Watch GT",
    category: "smartwatch",
    price: "$84.900",
    btn: <Itemcount initial={1} stock={5} onAdd={onAdd} />,
  },
  {
    id: 6,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013888023982776461/www.smartking.cl-samsung-galaxy-watch-samsung-galaxy-watch-02.jpg",
    title: "Samsung Galaxy Watch",
    category: "smartwatch",
    price: "$139.900",
    btn: <Itemcount initial={1} stock={10} onAdd={onAdd} />,
  },
];

const ItemDetailContainer = () => {

  const [datos,setDatos] = useState ({})

  const {detalleId} = useParams ()

  useEffect (() => {
    const getDatos = new Promise(resolve => {
        setTimeout (() => {
            resolve(productos);
        }, 1000);
    });

    getDatos.then(res => setDatos(res.find(celulares => celulares.id === parseInt(detalleId))))

  } , [])

  return (
    <ItemDetail datos={datos}/>
  );
}

export default ItemDetailContainer
