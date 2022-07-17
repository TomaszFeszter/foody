import React from "react";

export default function Button({ children, ...rest }) {
  return (
    <button className="btn" {...rest}>
      {children}
    </button>
  );
}
