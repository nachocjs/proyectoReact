import React from 'react'
import { CartContext } from '../contex/CartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

export const Carrito = () => {

    const {carrito,  calcularTotal, vaciarCarrito, eliminarProducto, calcularCantidad} = useContext(CartContext);

  return (
     <div>

      <h2 className='titulo-carrito'>Tienes en el carrito estos productos:</h2>

      {carrito.map((prod) => {
        return (
          
            <div className='container-carrito-final' key={prod.id}>
            <img className='img-carrito-final' src={prod.imagen} alt="" />
            <h1 className='titulo-carrito-final'>{prod.nombre}: $ {prod.precio}</h1>
            <button className='btn-carrito-final' onClick={() => { eliminarProducto(prod)}}>Borrar</button>
            </div>
        )
        
        })}
      {
        carrito.length > 0 ?
        <div className='container-reset'> 
          <h2 className='titulo-carrito-total'>Tienes {calcularCantidad()} productos  en el carrito </h2>
          <h2 className='titulo-carrito-total'>Total: ${calcularTotal()}</h2>
          <div className='contenedor-btn-carrito'>
          <button className='btn-carrito-total' onClick={vaciarCarrito}>Vaciar carrito</button>
          <button  className="btn-finalizar-compra"><NavLink to="/Checkout" activeclassname="active">Finalizar Compra</NavLink></button>
          </div>
        </div> :
        <h2 className='carrito-vacio'>no tienes productos en el carrito 😥</h2>
      }
    </div>
  )
}
