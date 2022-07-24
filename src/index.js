import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { CartProvider } from "./context/Cart";
import { ProductProvider } from "./context/Products";
import "./sass/main.scss";
import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import Product from "./screens/Product";
import SignUp from "./screens/SignUp";
import Cart from "./screens/Cart";
import PrivateRoute from "./features/PrivateRoute";
import Checkout from "./screens/Checkout";
import Fail from "./screens/Fail";
import Success from "./screens/Success";
import OrderHistory from "./screens/OrderHistory";
import CategoryPage from "./screens/Category";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute mustBeAuthorized={false} redirectTo="/category">
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/sign-up"
        element={
          <PrivateRoute mustBeAuthorized={false} redirectTo="/">
            <SignUp />
          </PrivateRoute>
        }
      />
      <Route
        path="/category"
        element={
          <PrivateRoute mustBeAuthorized={true} redirectTo="/">
            <CategoryPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/log-in"
        element={
          <PrivateRoute mustBeAuthorized={false} redirectTo="/">
            <LogIn />
          </PrivateRoute>
        }
      />
      <Route
        path="/products/:productId"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/log-in">
            <Product />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart/"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/log-in">
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout/"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/log-in">
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path="/fail"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/log-in">
            <Fail />
          </PrivateRoute>
        }
      />
      <Route
        path="/success/"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/log-in">
            <Success />
          </PrivateRoute>
        }
      />
      <Route
        path="/order-history/"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/log-in">
            <OrderHistory />
          </PrivateRoute>
        }
      />
    </Routes>
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
