
import { useState } from 'react';
import { Header } from './components/header/Header'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer'
import './css/main.css'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Form } from 'react-router-dom'
import { Carrito } from './components/Carrito';
import { CartProvider } from './contex/CartContext';
import { Checkout } from './components/Checkout';
function App() {

  const [carrito, setCarrito] = useState([]);

  return (

    <CartProvider >
    <BrowserRouter>

        <Header />
           
        <Routes>
          <Route path="/"  element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          
        </Routes>

        
        
    </BrowserRouter>
    </CartProvider>
  )
}


export default App
