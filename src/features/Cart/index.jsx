import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/Cart";
import Heading from "../../components/Heading";
import ProductListItem from "../../components/ProductListItem";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import useMediaQuery from "../../hooks/useMediaQuery";

const Cart = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    putItemToCart: increment,
    deleteItemFromCart: decrement,
    cart,
  } = useContext(CartContext);

  useEffect(() => {
    if (isDesktop && pathname === "/cart") navigate("/category");
  }, [isDesktop, pathname, navigate]);

  if (!cart) return <Loader />;
  return (
    <div className="cart">
      <Heading size="big">Your cart</Heading>
      <section className="cart__products">
        {cart.products.length ? (
          cart.products.map((product) => {
            const { id, thumbs, name, short, price, qty } = product;
            return (
              <ProductListItem
                key={id}
                addToCart
                imgSrc={thumbs.small}
                caption={name}
                description={short}
                price={price}
                qty={qty}
                increment={() => increment(product)}
                decrement={() => decrement(product)}
              />
            );
          })
        ) : (
          <Heading>No orders in your cart</Heading>
        )}
      </section>
      <div className="cart__summary">
        <Heading size="small">Total</Heading>
        <Heading>{`$${cart.total}`}</Heading>
      </div>
      <Button onClick={() => navigate("/checkout")} long>
        Process to payment
      </Button>
    </div>
  );
};

export default Cart;
