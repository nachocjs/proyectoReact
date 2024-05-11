import React from 'react'
import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const Header = () => {
  return (
    <div className='header-container'>
        <Logo />
        <NavBar />
        <Carrito />
    </div>
  )
}
