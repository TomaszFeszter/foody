import React from "react";

function Button({ children, secondary = false, ...rest }) {
  return (
    <button className={`btn ${secondary ? "btn--secondary" : ""}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
