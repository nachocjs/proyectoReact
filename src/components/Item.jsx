import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  return (
    <div className='card'>
    <img className='img-card' src= {producto.imagen} />
    <h2>{producto.nombre}</h2>
    <p>$ {producto.precio}</p>
    <button className='btn-mas'><Link to={`/item/${producto.id}`}>Mas Info...</Link></button>

    </div>
  )
}
