import React from 'react'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='logo-container'>
        <NavLink to="/"><img className='logo-img' src="./assets/kisspng-laptop-computer-icons-computer-monitors-5b3c00772c2241.4970797915306589351808 (1).png" alt="Logo" /></NavLink>
        <NavLink to="/" className='logo-link'>Mr Componentes</NavLink>
    </div>
  )
}
