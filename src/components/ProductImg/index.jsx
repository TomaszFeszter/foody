import React from "react";

function ProductImg({ children, type, src }) {
  if (type === "medium")
    return (
      <div className="product-img product-img--medium">
        <img src={src} alt="product img" />
        {children}
      </div>
    );

  if (type === "big")
    return (
      <div className="product-img product-img--big">
        <img src={src} max-width={230} max-height={150} alt="product img" />
        {children}
      </div>
    );

  return (
    <div className="product-img">
      <img src={src} alt="product img" />
      {children}
    </div>
  );
}

export default ProductImg;
