import React from "react";

function Link({ children, href = "", ...rest }) {
  return (
    <a className="link" href={href} {...rest}>
      {children}
    </a>
  );
}

export default Link;
