import React from 'react';
import { NavLink } from 'react-router-dom';
import categories from "../../data/categorias.json";

export const NavBar = () => {

  return (
    <div>
        <nav>
            <ul className='nav-Lista'>
                <li><NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink></li>
                {
                  categories.map((category) => {
                    return(
                      <li className='nav-lista'>
                      <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">{category.nombre}  <img src={category.imagen} className='img-nav'></img></NavLink>
                    </li>
                    )
                    
                  })
                }
            </ul>
        </nav>
    </div>
  )
}
