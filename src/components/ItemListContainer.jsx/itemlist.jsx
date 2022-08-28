import React from 'react'
import Item from './Item'

const ItemList = ({datos = []}) => {
  return (
    <div className='container_box'>{datos.map(celular => <Item key={celular.id} info={celular}/>)}</div>
    
  )
}

export default ItemList