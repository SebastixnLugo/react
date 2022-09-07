import './App.css';
import Navbar from './components/Navbar.jsx/Navbar';
import Footer from "./components/Footer.jsx/Footer";
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer.jsx';
import Cart from './components/Cart.jsx/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import CartProvider from './context/CartContext';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
      </Routes>
      </CartProvider>
      <Footer/>
    </BrowserRouter>

  

  );
}

export default App;