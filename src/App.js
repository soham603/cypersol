import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllProduct from './pages/AllProducts';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-products" element={<AllProduct />} />
      </Routes>
  );
}

export default App;
