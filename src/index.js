import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { CartProvider } from "./context/Cart";
import { ProductProvider } from "./context/Products";
import { Container } from "./layouts";
import "./sass/main.scss";
import Category from "./screens/Category";
import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import Product from "./screens/Product";
import SignUp from "./screens/SignUp";
import Cart from "./screens/Cart";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart/" element={<Cart />} />
      </Routes>
    </Container>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
