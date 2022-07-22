import React from "react";

function SubHeading({ children = "", size = "", modifier = "", ...rest }) {
  if (size === "big")
    return (
      <h4 className={`sub-header ${modifier}`} {...rest}>
        {children}
      </h4>
    );

  return (
    <h5 className={`body ${modifier}`} {...rest}>
      {children}
    </h5>
  );
}

export default SubHeading;
