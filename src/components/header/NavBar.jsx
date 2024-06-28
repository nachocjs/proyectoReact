import React, { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs, } from "firebase/firestore";
import { db } from "../../firebase/config"

export const NavBar = () => {

  let [categories, setCategories] = useState([]);
  
  useEffect(()=> {
    const categoriasRef = collection(db, "categorias");
    getDocs(categoriasRef)
    .then((res) => {
      setCategories(res.docs.map((doc) => {
        return {...doc.data()}
      }));
    })
  }, [])


  return (
    <div>
        <nav>
            <ul className='nav-Lista'>
                <li><NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink></li>
                {
                  categories.map((category) => {
                    return(
                      <li key={category.id} className='nav-lista'>
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
