import React from "react";
import ReactDOM from "react-dom";
import { CloseButton } from "../BackButton";

import Box from "../Box";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, handleClose }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <Box>
        <CloseButton onClick={handleClose} />
        {children}
      </Box>
    </div>,
    modalRoot
  );
};

export default Modal;
