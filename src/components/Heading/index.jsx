import React from "react";

function Heading({ children, size, styles = "", tag }) {
  let CustomTag = `${tag ? tag : "h2"}`;
  if (size === "small") {
    CustomTag = `${tag ? tag : "h3"}`;
    return <CustomTag className={`h3 ${styles}`}>{children}</CustomTag>;
  }
  if (size === "big") {
    CustomTag = `${tag ? tag : "h1"}`;

    return <CustomTag className={`h1 ${styles}`}>{children}</CustomTag>;
  }

  return <CustomTag className={`h2 ${styles}`}>{children}</CustomTag>;
}

export default Heading;
