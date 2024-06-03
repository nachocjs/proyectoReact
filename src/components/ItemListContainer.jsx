import React, { useEffect, useState } from "react";
import data from "../data/productos.json";
import { ItemLista } from "./ItemLista";

export const ItemListContainer = () => {
  
  let [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {

    pedirProductos()
    .then((res) => {
      setProductos(res);
    })
  }, [])

  pedirProductos()
    .then((res) => {
      setProductos(res);
   })

  return (
    <div className="productos-container">
      <h1 className="tCatalogo">Catálogo</h1>
      <div className="contenedor-tarjetas">
      <ItemLista productos={productos} />
      </div>
    </div>
  )
}
