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

const Category = () => {
  const { setFavourite, favouriteProducts } = useContext(FavouritesContext);
  const { getCategories, categories, getProductsInCategory, products } =
    useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState(null);
  const [productsArr, setProductsArr] = useState(null);

  useEffect(() => {
    let newArr = [];
    Array.from(favouriteProducts).map((item) => {
      return newArr.push(JSON.parse(item));
    });
    setProductsArr(newArr);
    console.log(productsArr);
  }, [favouriteProducts]);

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
                  image={`http://localhost:5050/${image}`}
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
                  setFavourite={setFavourite}
                  isFavourite={favouriteProducts.has(id)}
                />
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  );
};

export default Category;
