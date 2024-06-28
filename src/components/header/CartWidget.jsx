import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contex/CartContext'
import { useContext } from 'react'
export const CartWidget = () => {

  const {carrito} = useContext(CartContext);
  
  return (
    <div className='carrito-container'><NavLink to="/carrito" activeclassname="active" className="nav-link">🛒 {carrito.length}</NavLink>  </div>
  )
}
