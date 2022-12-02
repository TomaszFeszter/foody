import React, { useEffect, useState } from "react";

export const FavouritesContext = React.createContext(null);

export const FavouritesProvider = ({ children }) => {
  const [favouriteProducts, setFavouriteProducts] = useState(
    new Set(
      localStorage.getItem("favouriteProducts")
        ? JSON.parse(localStorage.getItem("favouriteProducts"))
        : []
    )
  );

  const setFavourite = (item) => {
    if (favouriteProducts.has(item)) {
      setFavouriteProducts(
        new Set([...favouriteProducts].filter((path) => path !== item))
      );
    } else {
      setFavouriteProducts(new Set([...favouriteProducts, item]));
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "favouriteProducts",
      JSON.stringify([...favouriteProducts])
    );
  }, [favouriteProducts]);

  return (
    <FavouritesContext.Provider
      value={{
        setFavourite,
        favouriteProducts,
        // putItemToCart,
        // deleteItemFromCart,
        // putPaymentMethod,
        // cart: cartDataReq.data,
        // putAddress,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
