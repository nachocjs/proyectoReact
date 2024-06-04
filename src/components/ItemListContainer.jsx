import React, { useEffect, useState } from "react";
import data from "../data/productos.json";
import { ItemLista } from "./ItemLista";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  
  let { categoryId } = useParams();

  let [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    })
  }

  useEffect(() => {

    pedirProductos()
    .then((res) => {
      if (categoryId) {
        setProductos(res.filter((prod) => prod.categoria.id === categoryId))
      } else{
        setProductos(res);
      }
      
    })
  }, [categoryId])

  return (
    <div className="productos-container">
      <h1 className="tCatalogo">Catálogo</h1>
      <div className="contenedor-tarjetas">
      <ItemLista productos={productos} />
      </div>
    </div>
  )
}
