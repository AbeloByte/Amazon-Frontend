// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/Auth/SignUp";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
function Routering() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productid" element={<ProductDetail />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default Routering;