import React from "react";

function Button({ children, secondary = false, long, ...rest }) {
  return (
    <button
      className={`btn ${secondary ? "btn--white" : ""} ${
        long ? "btn--long" : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
