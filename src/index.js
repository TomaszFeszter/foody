import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Container } from "./layouts";
import "./sass/main.scss";
import Category from "./screens/Category";
import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import Product from "./screens/Product";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
        {/* <NavBar /> */}
      </BrowserRouter>
    </Container>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
