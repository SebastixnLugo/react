import React from 'react'
import './Cards.css'
import Samsungm62 from '../img/Samsung-Galaxy-M62_03.png'

function Cards() {
  return (
    <>
    <h2 style={{textAlign:"center", paddingTop:"1.5rem"}}>Lo ultimo que ha llegado</h2>
    
    <div className='section-1'>
    <div className='container'>
      <div className='caja-producto'>
        <div className='etiqueta-nuevo'><span>-10%</span></div>
        <div className='imagen-producto'>
          <img src={Samsungm62} alt="" />
        </div>
        <div className='detalles-producto'>
          <h5>Samsung Galaxy M62 256GB/8GB</h5>
          <span>$424.900</span>
        </div>
        <button className='boton-producto'>Comprar ya</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cards