import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "../Icons";
import { RatingLabel } from "../Labels";
import ProductImg from "../ProductImg";
import SubHeading from "../SubHeading";

function ProductGridItem({
  imgSrc = "",
  caption = "",
  description = "",
  rating = "",
  id,
}) {
  const navigate = useNavigate();
  const descriptionShort = description.slice(0, 50);

  const handleClick = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="product-grid-item">
      <ProductImg onClick={handleClick} src={imgSrc} type="medium" />
      <SubHeading onClick={handleClick} size="big">
        {caption}
      </SubHeading>
      <SubHeading onClick={handleClick}>{descriptionShort}</SubHeading>
      <div className="cta">
        <RatingLabel>{rating}</RatingLabel> <Heart />
      </div>
    </div>
  );
}

export default ProductGridItem;
