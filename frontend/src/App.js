import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Pricing from "./Pages/Pricing";
import Solution from "./Pages/Solution";
import Resources from "./Pages/Resources";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
