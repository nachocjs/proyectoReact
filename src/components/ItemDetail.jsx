import React, { useContext } from 'react'
import { CartContext } from '../contex/CartContext'

export const ItemDetail = ({producto}) => {
    
  const { agregarAlCarrito } = useContext(CartContext);


  return (
    <div>
        <div className='tDetalle'>
       {producto ? 
        producto.nombre : "cargando..."}
       </div>
            <div className='detalleContainer'>
                    <div className='imgDetalle'>
                    <img className='fotoDetalle' src={producto ? producto.imagen : `cargando`}></img>
                    </div>
                    <div className='container-precio-descripcion'>
                    <div className='textoDetalle'>
                    <p className='pDetalle'>{producto ? 
                        producto.descripcion : "cargando..."}</p>
                    </div>
                    <div className='precioContainer'>
                    <p>$ {producto ? 
                        producto.precio : "cargando..."}</p>
                      <button className='btn-carrito' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                    </div>
                    </div>
            </div>
    </div>
  )
}
