import React, { useEffect, useState } from "react";
import data from "../data/productos.json";

export const ItemListContainer = () => {
  
  let [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  pedirProductos()
    .then((res) => {
      setProductos(res);
   })

  return (
    <div className="productos-container">
    </div>
  )
}
