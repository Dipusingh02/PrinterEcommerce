// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext.jsx';

import ProductPage from './pages/ProductPages';
import CartPage from './pages/CartPage';
import Support from './pages/Support';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productName" element={<ProductPage />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/support" element={<Support/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
