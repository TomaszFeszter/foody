import React from "react";
import { useContext } from "react";
import BackButton from "../../components/BackButton";
import Heading from "../../components/Heading";
import ProductGridItem from "../../components/ProductGridItem";
import { FavouritesContext } from "../../context/Favourites";

import AppLayout from "../../layouts/AppLayout";

export const Wishlist = () => {
  const { favouriteProducts, setFavorite } = useContext(FavouritesContext);
  console.log(favouriteProducts);

  return (
    <AppLayout>
      <section className="wishlist">
        <BackButton />
        <Heading size="big">Your wishlist</Heading>
        <div className="wishlist__content">
          {favouriteProducts ? (
            Object.entries(favouriteProducts).map(
              ([key, { id, img, name, description, rating }]) => (
                <ProductGridItem
                  key={key}
                  id={id}
                  imgSrc={img}
                  caption={name}
                  description={description}
                  rating={rating}
                  setFavorite={() => setFavorite(favouriteProducts[key])}
                  isFavourite={id in favouriteProducts}
                />
              )
            )
          ) : (
            <Heading>No products liked</Heading>
          )}
          {/* {favouriteProducts && favouriteProducts.length ? (
            favouriteProducts.map((id) => {
              return id;
            })
          ) : (
            <Heading>No products liked</Heading>
          )} */}
        </div>
      </section>
    </AppLayout>
  );
};
