import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  const {categoriaId} = useParams ()

  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, "products")
    if (categoriaId) {
      const queryFilter = query(queryCollection, where("category", "==", categoriaId))
      getDocs(queryFilter)
      .then(res => setDatos(res.docs.map(product => ({ id:product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
      .then(res => setDatos(res.docs.map(product => ({ id:product.id, ...product.data() }))))
    }
  }, [categoriaId]);



  return (
    <>
      <ItemList datos={datos} />
    </>
  );
};

export default ItemListContainer;
