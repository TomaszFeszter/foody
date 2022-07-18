import React from "react";
import { useNavigate } from "react-router-dom";
import { Back, Close, Menu } from "../Icons";

const NavButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className="nav-btn">
      {children}
    </button>
  );
};

const BackButton = () => {
  let navigate = useNavigate();
  return (
    <NavButton onClick={() => navigate(-1)}>
      <Back />
    </NavButton>
  );
};

export const MenuButton = ({ onClick }) => {
  return (
    <NavButton onClick={onClick}>
      <Menu />
    </NavButton>
  );
};

export const CloseButton = ({ onClick }) => {
  return (
    <NavButton onClick={onClick}>
      <Close />
    </NavButton>
  );
};

export default BackButton;
