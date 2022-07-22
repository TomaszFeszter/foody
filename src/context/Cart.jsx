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
    if (!isLoggedIn || cartDataReq.data || cartDataReq.isLoading) return;
    cartDataReq.run(API.POST_CART(), { method: "POST", token });
  }, [isLoggedIn, cartDataReq, token]);

  useEffect(() => {
    createCart();
  }, [createCart]);

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

      cartDataReq.run(API.PUT_PRODUCTS_TO_CART(cart.id), {
        body: JSON.stringify({ products: cartArr }),
        method: "PUT",
        token,
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        createCart,
        putItemToCart,
        deleteItemFromCart,
        cart: cartDataReq.data,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
