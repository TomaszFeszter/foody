import React from "react";
import { NavLink } from "react-router-dom";
import { Cart, Heart, Home, Notification, Search } from "../Icons";

const NavBar = () => {
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
        <Cart />
      </NavLink>
    </div>
  );
};

export default NavBar;
