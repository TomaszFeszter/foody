import React from "react";
import Description from "../../components/Description";
import Heading from "../../components/Heading";
import { KcalLabel, RatingLabel, TimeLabel } from "../../components/Labels";
import ProductImg from "../../components/ProductImg";
import AuthorizedLayout from "../../layouts/AuthorizedLayout";

const ProductPage = ({ img, caption, rating, kcal, time, description }) => {
  return (
    <AuthorizedLayout>
      <div className="product">
        <ProductImg type="big" src={img} />
        <div className="product__info">
          <Heading type="big">{caption}</Heading>
          <div className="product__labels">
            <RatingLabel>{rating}</RatingLabel>
            <KcalLabel>{kcal}</KcalLabel>
            <TimeLabel>{time}</TimeLabel>
          </div>
          <Description>{description}</Description>
        </div>
      </div>
    </AuthorizedLayout>
  );
};

export default ProductPage;
