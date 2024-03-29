import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/Cart";
import useMediaQuery from "../../hooks/useMediaQuery";
import Heading from "../Heading";
import { Cart, Heart, Home } from "../Icons";

const NavBar = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const { cart } = useContext(CartContext);

  return (
    <div className="nav-bar">
      <NavLink
        className={({ isActive }) => (isActive ? "fill-red" : "")}
        to="/category"
      >
        {isDesktop && <Heading>Home</Heading>}
        <Home />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "fill-red" : "")}
        to="/wishlist"
      >
        {isDesktop && <Heading>Wishlist</Heading>}
        <Heart />
      </NavLink>
      {/* <NavLink
        className={({ isActive }) => (isActive ? "search active" : "search")}
        to="/search"
      >
        <Search />
      </NavLink> */}
      {/* <NavLink
        className={({ isActive }) => (isActive ? "fill-red" : "")}
        to="/notifications"
      >
        <Notification />
      </NavLink> */}
      {!isDesktop && (
        <NavLink
          className={({ isActive }) => (isActive ? "fill-red" : "")}
          to="/cart"
        >
          {cart && <span className="status">{cart.products.length}</span>}
          <Cart />
        </NavLink>
      )}
    </div>
  );
};

export default NavBar;
