import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/Products";
import FilterButton from "../../components/FilterButton";
import ProductGridItem from "../../components/ProductGridItem";
import Heading from "../../components/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import Loader from "../../components/Loader";
import { FavouritesContext } from "../../context/Favourites";
const isDevelopment = process.env.REACT_APP_ENV === "development";

const BASE_URL = isDevelopment
  ? process.env.REACT_APP_DEV_API_URL
  : process.env.REACT_APP_HOST_URL;

const Category = () => {
  const { setFavorite, favouriteProducts } = useContext(FavouritesContext);
  const { getCategories, categories, getProductsInCategory, products } =
    useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (!categories) return;

    setActiveCategory(categories[0].id);
  }, [categories]);

  useEffect(() => {
    if (categories) return;
    getCategories();
  }, [categories, getCategories]);

  useEffect(() => {
    if (!activeCategory) return;
    getProductsInCategory(activeCategory);
  }, [activeCategory, getProductsInCategory]);

  if (!categories) return <Loader />;

  return (
    <div className="category">
      <Heading size="big">Enjoy Delicious food</Heading>
      <div className="category__filters">
        {categories && (
          <Splide
            options={{
              autoWidth: true,
              gap: "2rem",
              arrows: false,
              pagination: false,
            }}
          >
            {categories.map(({ id, name, image }) => (
              <SplideSlide key={id}>
                <FilterButton
                  onClick={() => setActiveCategory(id)}
                  name={name}
                  image={`${BASE_URL}${image}`}
                  active={id === activeCategory}
                />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
      <Heading>Popular restaurants</Heading>
      <div className="category__products">
        <Splide
          options={{
            autoWidth: true,
            gap: "2rem",
            arrows: false,
            pagination: false,
          }}
        >
          {products &&
            products.map(({ thumbs, name, short, rating, id }) => (
              <SplideSlide key={id}>
                <ProductGridItem
                  id={id}
                  imgSrc={thumbs.normal}
                  caption={name}
                  description={short}
                  rating={rating}
                  setFavorite={setFavorite}
                  isFavourite={id in favouriteProducts}
                />
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  );
};

export default Category;
