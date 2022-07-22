import React from "react";
import AddToCart from "../AddToCart";
import Link from "../Links";
import ProductImg from "../ProductImg";
import SubHeading from "../SubHeading";

function ProductListItem({
  imgSrc,
  caption = "",
  description = "",
  price = "",
  orderAgain = false,
  flag,
  addToCart = true,
  qty = "0",
  increment,
  decrement,
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
        {addToCart && (
          <AddToCart qty={qty} increment={increment} decrement={decrement} />
        )}
        {orderAgain && <Link>Order again</Link>}
      </div>
      {flag && <span className="flag">{flag}</span>}
    </div>
  );
}

export default ProductListItem;
