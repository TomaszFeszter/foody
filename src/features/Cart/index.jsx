import React, { useContext } from "react";
import { CartContext } from "../../context/Cart";
import Heading from "../../components/Heading";
import ProductListItem from "../../components/ProductListItem";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const Cart = () => {
  const navigate = useNavigate();
  const {
    putItemToCart: increment,
    deleteItemFromCart: decrement,
    cart,
  } = useContext(CartContext);

  if (!cart) return <Loader />;

  return (
    <div className="cart">
      <Heading size="big">Your cart</Heading>
      <section className="cart__products">
        {cart.products
          ? cart.products.map((product) => {
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
          : "Cart is empty"}
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
