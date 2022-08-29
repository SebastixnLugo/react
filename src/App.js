import './App.css';
import Navbar from './components/Navbar.jsx/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
      </Routes>
 
      



    </BrowserRouter>

  

  );
}

export default App;