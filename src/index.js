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
import { Wishlist } from "./screens/Wishlist";
import { FavouritesProvider } from "./context/Favourites";
import { Profile } from "./screens/Profile";

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
          <PrivateRoute mustBeAuthorized={false} redirectTo="/category">
            <SignUp />
          </PrivateRoute>
        }
      />
      <Route
        path="/log-in"
        element={
          <PrivateRoute mustBeAuthorized={false} redirectTo="/category">
            <LogIn />
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
        path="/products/:productId"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/">
            <Product />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/">
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout/"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/">
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path="/fail"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/">
            <Fail />
          </PrivateRoute>
        }
      />
      <Route
        path="/success"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/">
            <Success />
          </PrivateRoute>
        }
      />
      <Route
        path="/order-history"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/">
            <OrderHistory />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/">
            <Wishlist />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute mustBeAuthorized redirectTo="/">
            <Profile />
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
          <FavouritesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FavouritesProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
