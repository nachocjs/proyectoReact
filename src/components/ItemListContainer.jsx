import React, { useEffect, useState } from "react";
import { ItemLista } from "./ItemLista";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config"

export const ItemListContainer = () => {
  
  let { categoryId } = useParams();

  let [productos, setProductos] = useState([]);



  useEffect(() => {
    const productosRef = collection(db, "productos")
    const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;

    getDocs(q)
      .then((res) => {
        setProductos(
          res.docs.map((doc)=> {
            return { ...doc.data(), id: doc.id}
          })
        )
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
