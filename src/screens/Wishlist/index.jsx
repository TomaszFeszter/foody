import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Heading from "../../components/Heading";
import { FavouritesContext } from "../../context/Favourites";
import { ProductContext } from "../../context/Products";
import AppLayout from "../../layouts/AppLayout";

export const Wishlist = () => {
  const { favouriteProducts } = useContext(FavouritesContext);
  const products = Array.from(favouriteProducts);

  return (
    <AppLayout>
      <section className="wishlist">
        <Heading size="big">Your wishlist</Heading>
        <div className="wishlist__content">
          {products && products.length ? (
            products.map((id) => {
              return id;
            })
          ) : (
            <Heading>No products liked</Heading>
          )}
        </div>
      </section>
    </AppLayout>
  );
};
