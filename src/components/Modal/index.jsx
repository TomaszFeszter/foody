import React from "react";
import ReactDOM from "react-dom";

import Box from "../Box";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children }) => {
  return ReactDOM.createPortal(<Box>{children}</Box>, modalRoot);
};

export default Modal;
