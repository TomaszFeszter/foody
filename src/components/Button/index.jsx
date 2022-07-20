import React from "react";

function Button({ children, secondary = false, long, styles = "", ...rest }) {
  return (
    <button
      className={`btn ${secondary ? "btn--white" : ""} ${
        long ? "btn--long" : ""
      } ${styles}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
