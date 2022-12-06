import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CloseButton } from "../BackButton";
import Button from "../Button";
import { Logo, Paper, Profile } from "../Icons";
import { AuthContext } from "../../context/Auth";
import useMediaQuery from "../../hooks/useMediaQuery";

const Menu = ({ userName, userEmail, userImg, open, handleClose }) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const { logout } = useContext(AuthContext);
  return (
    <div
      onBlur={handleClose}
      tabIndex={0}
      className={`menu ${open ? "menu--active" : ""} pl-10 pt-16`}
    >
      {!isDesktop && <CloseButton onClick={handleClose} />}
      <Logo />
      <ul className="menu__options">
        <li className="menu__options__item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "link link--black link--active  link--fill"
                : "link link--black"
            }
            to="/profile"
          >
            <Profile /> My profile
          </NavLink>
        </li>
        <li className="menu__options__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link link--black link--active" : "link link--black"
            }
            to="/order-history"
          >
            <Paper /> Order history
          </NavLink>
        </li>
      </ul>
      <Button
        onClick={() => {
          logout();
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export default Menu;
