import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

function Link({ children, href = "", ...rest }) {
  return (
    <ReactRouterLink className="link" to={href} {...rest}>
      {children}
    </ReactRouterLink>
  );
}

export default Link;
