import React from "react";
import ProductImg from "../ProductImg";
import SubHeading from "../SubHeading";

function ProductListItem({
  imgSrc,
  caption = "",
  description = "",
  price = "",
  orderAgain = true,
  flag = "Complete",
  addToCart = true,
}) {
  return (
    <div className="product-list-item">
      <ProductImg src={imgSrc}></ProductImg>
      <div className="details">
        <SubHeading size="big">{caption}</SubHeading>
        <SubHeading>{description}</SubHeading>
        <SubHeading modifier="price" size="big">
          {price}
        </SubHeading>
      </div>
      <div className="cta">
        {flag && <span className="flag">{flag}</span>}

        {addToCart && <div className="add-to-cart"></div>}
        {orderAgain && <button></button>}
      </div>
    </div>
  );
}

export default ProductListItem;
