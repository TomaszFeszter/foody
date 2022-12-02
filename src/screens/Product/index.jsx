import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../../components/AddToCart";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Description from "../../components/Description";
import Heading from "../../components/Heading";
import { KcalLabel, RatingLabel, TimeLabel } from "../../components/Labels";
import ProductImg from "../../components/ProductImg";
import SubHeading from "../../components/SubHeading";
import { CartContext } from "../../context/Cart";
import { ProductContext } from "../../context/Products";
import useMediaQuery from "../../hooks/useMediaQuery";
import AppLayout from "../../layouts/AppLayout";

const Product = () => {
  const isDesktop = useMediaQuery("(max-width: 1200px)");
  const { getProduct, product } = useContext(ProductContext);
  const {
    putItemToCart: increment,
    deleteItemFromCart: decrement,
    cart,
  } = useContext(CartContext);
  let { productId } = useParams();

  useEffect(() => {
    getProduct(productId);
  }, [getProduct, productId]);

  if (!product || !cart) return null;

  const currentItemInCart = cart.products.find(
    (product) => productId === product.id
  );
  const qty = currentItemInCart ? currentItemInCart.qty : 0;
  const { images, name, description, rating, kcal, prepTime, price } = product;
  return (
    <AppLayout>
      <div className="product">
        {isDesktop && <BackButton />}
        <ProductImg type="big" src={images.big} />
        <AddToCart
          qty={qty}
          increment={() => increment(product)}
          decrement={() => decrement(product)}
          allInOne
        />
        <div className="product__info">
          <Heading size="big">{name}</Heading>
          <div className="product__info__labels">
            <RatingLabel>{rating}</RatingLabel>
            <KcalLabel>{kcal}</KcalLabel>
            <TimeLabel>{prepTime}</TimeLabel>
          </div>
          <Description content={description} />
          <SubHeading modifier="price" size="big">
            {price} $
          </SubHeading>
          <Button onClick={() => increment(product)} long>
            Add to cart
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Product;
