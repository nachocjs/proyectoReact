import React, { useState } from 'react'
import { CartContext } from '../contex/CartContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { collection,addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { NavLink } from 'react-router-dom';


export const Checkout = () => {

    const {carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const {register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");
    
    const comprar = (datos) => {

        const orden = {
            fecha: Timestamp.now(),
            cliente: datos,
            productos: carrito,
            total: calcularTotal()
        }
    const ordenRef = collection(db, "ordenes");

    addDoc(ordenRef, orden)
        .   then((doc)=> {
            setDocId(doc.id);
            vaciarCarrito();
        }) 
    }
  
    if (docId) {
        return (
            <div className='contenedor-final'>
                <h1 className='titulo-final'>Muchas Gracias Por tu compra!!!</h1>
                <p>A la brevedad uno de nuestros representantes se pondra en contacto para coordinar los detalles del envio!</p>
                <p>Tu número de ordes es: {docId}, ante cualquier consulta identificate con el mismo!</p>
                <div className='contenedor-btn-final'>
                <NavLink to="/" activeclassname="active" className="btn-seguir-comprando">seguir comprando</NavLink>
                </div>
                
            </div>
        )
    }

  return (
    <div className='container-form'>
        <h2 className='titulo-finalizar'>Ingresa tus datos para finalizar la compra</h2>

        <form onSubmit={handleSubmit(comprar)}>
                
                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                <input type="email" placeholder='Ingresa tu correo'{...register("correo")} />
                <input type="number" placeholder='Ingresa tu número de documento' {...register("documento")} />
                <input type="text" placeholder='Ingresa tu dirección'{...register("direccion")} />
                <input type="number" placeholder='Ingresa tu número telefónico' {...register("telefono")} />
                
                <button className='btn-realizar-orden' type='submit'>Realizar Orden</button>
        </form>
    </div>
  )
}
