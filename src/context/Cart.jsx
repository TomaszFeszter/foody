import React, { useCallback, useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import API from "../utils/api";
import { AuthContext } from "./Auth";

export const CartContext = React.createContext(null);

export const CartProvider = ({ children }) => {
  const { isLoggedIn, token, isLoading } = useContext(AuthContext);
  const cartDataReq = useFetch();
  const { data: cart } = cartDataReq;

  const createCart = useCallback(() => {
    cartDataReq.run(API.POST_CART(), { method: "POST", token });
  }, [cartDataReq, token]);

  useEffect(() => {
    if (!isLoggedIn || cartDataReq.data || cartDataReq.isLoading) return;
    createCart();
  }, [cartDataReq.data, cartDataReq.isLoading, createCart, isLoggedIn]);

  const putItemToCart = (product) => {
    if (isLoading) return;
    const cartArr = cart.products ? [...cart.products] : [];
    const cartArrIndex = cartArr.findIndex(
      (arrProduct) => arrProduct.id === product.id
    );

    if (cartArrIndex === -1) cartArr.push({ ...product, qty: 1 });
    else cartArr[cartArrIndex].qty++;

    cartDataReq.run(API.PUT_PRODUCTS_TO_CART(cart.id), {
      body: JSON.stringify({ products: cartArr }),
      method: "PUT",
      token,
    });
  };

  const deleteItemFromCart = (product) => {
    if (isLoading) return;
    const cartArr = cart.products ? [...cart.products] : [];
    const cartArrIndex = cartArr.findIndex(
      (arrProduct) => arrProduct.id === product.id
    );

    if (cartArrIndex !== -1) {
      if (cartArr[cartArrIndex].qty > 1) cartArr[cartArrIndex].qty--;
      else cartArr.splice(cartArrIndex, 1);

      // do products przesłać paymentmethod
      cartDataReq.run(API.PUT_PRODUCTS_TO_CART(cart.id), {
        body: JSON.stringify({ products: cartArr }),
        method: "PUT",
        token,
      });
    }
  };

  const putPaymentMethod = (paymentMethodId) => {
    if (isLoading) return;
    cartDataReq.run(API.PUT_PAYMENT_METHOD(cart.id), {
      body: JSON.stringify({ paymentMethod: paymentMethodId }),
      method: "PUT",
      token,
    });
  };

  const putAddress = (address = {}) => {
    if (isLoading) return;
    cartDataReq.run(API.PUT_PAYMENT_METHOD(cart.id), {
      body: JSON.stringify({ address }),
      method: "PUT",
      token,
    });
  };

  return (
    <CartContext.Provider
      value={{
        createCart,
        putItemToCart,
        deleteItemFromCart,
        putPaymentMethod,
        cart: cartDataReq.data,
        putAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
