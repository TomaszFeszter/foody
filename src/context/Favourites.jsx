import React, { useEffect, useState } from "react";

export const FavouritesContext = React.createContext(null);

export const FavouritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : {}
  );
  // const [favouriteProducts, setFavouriteProducts] = useState(
  //   new Map(
  //     localStorage.getItem("favouriteProducts")
  //       ? JSON.parse(localStorage.getItem("favouriteProducts"))
  //       : []
  //   )
  // );

  // const setFavourite = (item) => {
  //   const productsMap = new Map([...favouriteProducts]);
  //   console.log(productsMap, favouriteProducts);
  //   if (favouriteProducts.has(item.id)) {
  //     productsMap.delete(item.id) && setFavouriteProducts(productsMap);
  //   } else {
  //     setFavouriteProducts(productsMap.set(item.id, item));
  //   }
  // };

  const setFavorite = (item) => {
    if (item.id in favorites) {
      const favoriteCopy = { ...favorites };
      delete favoriteCopy[item.id];
      setFavorites(favoriteCopy);
    } else {
      setFavorites({ ...favorites, [item.id]: item });
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavouritesContext.Provider
      value={{
        setFavorite,
        favouriteProducts: favorites,
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
