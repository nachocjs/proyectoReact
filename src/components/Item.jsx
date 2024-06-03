import React from 'react'

export const Item = ({producto}) => {
  return (
    <div className='card'>
    <img className='img-card' src= {producto.imagen} />
    <h2>{producto.nombre}</h2>
    <p>$ {producto.precio}</p>

    </div>
  )
}
