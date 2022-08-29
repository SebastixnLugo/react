import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import Itemcount from '../Itemcount.jsx/Itemcount'

const celular = {
    id: 1,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314127093059604/Samsung-Galaxy-M62_03.jpg",
    title: "Samsung Galaxy M62 256GB/8GB",
    price: "$424.900",
    btn: <Itemcount initial={1} stock={10}   />,
  }

const ItemDetailContainer = () => {

  const [datos,setDatos] = useState ({})

  useEffect (() => {
    const getDatos = new Promise(resolve => {
        setTimeout (() => {
            resolve(celular);
        }, 2000);
    });

    getDatos.then(res => setDatos(res))
  } , [])

  return (
    <ItemDetail datos={datos}/>
  );
}

export default ItemDetailContainer
