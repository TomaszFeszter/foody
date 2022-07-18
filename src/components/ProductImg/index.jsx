import React from "react";

function ProductImg({ children, size }) {
  if (size === "small") return <div className="">{children}</div>;

  if (size === "big") return <div className="">{children}</div>;

  return <div className="">{children}</div>;
}

export default ProductImg;
