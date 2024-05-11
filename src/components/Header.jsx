import React from 'react'
import { Logo } from './header/Logo'
import { NavBar } from './header/NavBar'
import { Carrito } from './header/Carrito'

export const Header = () => {
  return (
    <div className='header-container'>
        <Logo />
        <NavBar />
        <Carrito />
    </div>
  )
}
