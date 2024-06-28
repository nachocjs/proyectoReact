import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contex/CartContext';
import { useContext } from 'react';


export const Item = ({producto}) => {

  const {agregarAlCarrito} = useContext(CartContext);


  return (
    <div className='card'>
    <img className='img-card' src= {producto.imagen} />
    <h2>{producto.nombre}</h2>
    <p>$ {producto.precio}</p>
    <div className='btn-portada'>
    <button className='btn-mas'><Link to={`/item/${producto.id}`}>Mas Info...</Link></button>
    <button className='btn-carrito' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
    </div>
  )
}
