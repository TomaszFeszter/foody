import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CloseButton } from "../BackButton";
import Button from "../Button";
import { Paper, Profile } from "../Icons";
import SubHeading from "../SubHeading";
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
      <section className="menu__user mb-20">
        <figure className="menu__user__avatar mb-6">
          <img src={userImg} alt="user avatar" />
        </figure>
        <SubHeading>{userName}</SubHeading>
        <SubHeading size="small">{userEmail}</SubHeading>
      </section>
      <ul className="menu__options">
        <li className="menu__options__item">
          <Link className="link link--black" to="/account">
            <Profile /> My profile
          </Link>
        </li>
        <li className="menu__options__item">
          <Link className="link link--black" to="/order-history">
            <Paper /> Order history
          </Link>
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
