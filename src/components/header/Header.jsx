import React, { useContext } from 'react'
import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'


export const Header = () => {



  return (
    <div className='header-container'>
        <Logo />
        <NavBar />
        <CartWidget />
    </div>
  )
}
