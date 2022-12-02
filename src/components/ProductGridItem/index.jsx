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
  setFavourite,
  isFavourite,
}) {
  const navigate = useNavigate();
  const descriptionShort = description.slice(0, 50);
  const item = {
    id: id,
    img: imgSrc,
    name: caption,
    description: descriptionShort,
    rating: rating,
  };

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
        <RatingLabel>{rating}</RatingLabel>
        <div
          className={isFavourite ? "like like--checked" : "like"}
          onClick={() => {
            setFavourite(JSON.stringify(item));
          }}
        >
          <Heart />
        </div>
      </div>
    </div>
  );
}

export default ProductGridItem;
