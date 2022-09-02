import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const productos = [
  {
    id: 1,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314127093059604/Samsung-Galaxy-M62_03.jpg",
    title: "Samsung Galaxy M62 256GB/8GB",
    category: "celulares",
    price: "$424.900",
    
  },

  {
    id: 2,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314441489690664/Xiaomi-Redmi-Note-10-5G_01.jpg",
    title: "Xiaomi Redmi Note 10 5G",
    category: "celulares",
    price: "$249.900",
    
  },

  {
    id: 3,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314641608327279/OnePlus-9-Pro_01.jpg",
    title: "OnePlus 9 Pro 5G 256GB/12GB",
    category: "celulares",
    price: "$694.900",
    
  },

  {
    id: 4,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013314641608327279/OnePlus-9-Pro_01.jpg",
    title: "OnePlus 9 Pro 5G 256GB/12GB",
    category: "celulares",
    price: "$694.900",
    
  },

  {
    id: 5,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013888401860218950/www.smartking.cl-huawei-watch-gt-huawei-watch-gt-01.jpg",
    title: "Huawei Watch GT",
    category: "smartwatch",
    price: "$84.900",
    
  },
  {
    id: 6,
    image:
      "https://cdn.discordapp.com/attachments/748659559530233911/1013888023982776461/www.smartking.cl-samsung-galaxy-watch-samsung-galaxy-watch-02.jpg",
    title: "Samsung Galaxy Watch",
    category: "smartwatch",
    price: "$139.900",
    
  },
];

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  const {categoriaId} = useParams ()

  useEffect(() => {
    const getDatos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    if (categoriaId) {
      getDatos.then(res => setDatos(res.filter(celulares => celulares.category === categoriaId)))
    } else {
      getDatos.then(res => setDatos(res))
    }
  }, [categoriaId]);



  return (
    <>
      <ItemList datos={datos} />
    </>
  );
};

export default ItemListContainer;
