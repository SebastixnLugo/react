import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

  const [datos,setDatos] = useState ({})

  const {detalleId} = useParams ()

  useEffect (() => {
    const querydb = getFirestore()
    const queryDoc = doc(querydb, "products", detalleId)
    getDoc(queryDoc)
    .then(res => setDatos({id:res.id, ...res.data()}))

  } , [detalleId])

  return (
    <ItemDetail datos={datos}/>
  );
}

export default ItemDetailContainer
