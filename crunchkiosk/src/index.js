import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from './pages/Shop';
import Selection from './pages/Selection'
import Cart from './pages/Cart'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  </BrowserRouter>
);
