import React from "react";
import { Heart } from "../Icons";
import { RatingLabel } from "../Labels";
import ProductImg from "../ProductImg";
import SubHeading from "../SubHeading";

function ProductGridItem({
  imgSrc = "",
  caption = "",
  description = "",
  rating = "",
}) {
  return (
    <div className="product-grid-item">
      <ProductImg src={imgSrc} type="medium" />
      <SubHeading size="big">{caption}</SubHeading>
      <SubHeading>{description}</SubHeading>
      <div className="cta">
        <RatingLabel>{rating}</RatingLabel> <Heart />
      </div>
    </div>
  );
}

export default ProductGridItem;
