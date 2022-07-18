import React from "react";

function SubHeading({ children = "", size = "", modifier = "" }) {
  if (size === "big")
    return <h4 className={`sub-header ${modifier}`}>{children}</h4>;

  return <h5 className={`body ${modifier}`}>{children}</h5>;
}

export default SubHeading;
