
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/ItemListContainer'
import './css/main.css'
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

        <Header />
           
        <Routes>
          <Route path="/"  element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
        </Routes>

        
        
    </BrowserRouter>
  )
}
import { Form } from 'react-router-dom'

export default App
