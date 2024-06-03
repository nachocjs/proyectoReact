import React from 'react'
import { Item } from './Item'

export const ItemLista = ({productos}) => {
  return (
    
    <div className='productos-grilla'>
        {
            productos.length > 0 ?
            productos.map(producto => {
              return <Item producto={producto} />
            }): <img className='img-cargando' src="./src/assets/cargando.jpg" />
        }
    </div>
  )
}