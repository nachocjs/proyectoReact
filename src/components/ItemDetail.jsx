import React from 'react'

export const ItemDetail = ({producto}) => {
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
                    </div>
                    </div>
            </div>
    </div>
  )
}
