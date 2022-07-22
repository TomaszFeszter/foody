import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/Cart";
import { Cart, Heart, Home, Notification, Search } from "../Icons";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  console.log(cart && <span className="status">{cart.products.length}</span>);
  return (
    <div className="nav-bar">
      <NavLink
        className={({ isActive }) => (isActive ? "fill-red" : "")}
        to="/"
      >
        <Home />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "fill-red" : "")}
        to="/wishlist"
      >
        <Heart />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "search active" : "search")}
        to="/search"
      >
        <Search />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "fill-red" : "")}
        to="/notifications"
      >
        <Notification />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "fill-red" : "")}
        to="/cart"
      >
        {cart && <span className="status">{cart.products.length}</span>}
        <Cart />
      </NavLink>
    </div>
  );
};

export default NavBar;
