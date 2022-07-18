import React from "react";
import Link from "../Links";
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
        {addToCart && (
          <div className="add-to-cart">
            <button className="qty-btn">-</button>
            <span className="qty-label">15</span>
            <button className="qty-btn">+</button>
          </div>
        )}
        {orderAgain && <Link>Order again</Link>}
      </div>
      {flag && <span className="flag">{flag}</span>}
    </div>
  );
}

export default ProductListItem;
