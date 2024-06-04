import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";

export const ItemDetailContainer = () => {

    let {itemId} = useParams ();
    let [producto, setProducto] = useState();

    useEffect (() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])

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
