import React from "react";

function SubHeading({ children, size }) {
  if (size === "big") return <h4 className="sub-header">{children}</h4>;

  return <h5 className="body">{children}</h5>;
}

export default SubHeading;
