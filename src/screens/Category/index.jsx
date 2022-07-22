import React, { useContext, useEffect, useState } from "react";
import AuthorizedLayout from "../../layouts/AuthorizedLayout";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/Products";
import { AuthContext } from "../../context/Auth";
import FilterButton from "../../components/FilterButton";
import ProductGridItem from "../../components/ProductGridItem";
import Heading from "../../components/Heading";

const Category = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { getCategories, categories, getProductsInCategory, products } =
    useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate("/log-in");
  }

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

  return (
    <AuthorizedLayout>
      <div className="category">
        <Heading size="big">Enjoy Delicious food</Heading>
        <div className="category__filters">
          {categories &&
            categories.map(({ id, name, image }) => (
              <FilterButton
                key={id}
                onClick={() => setActiveCategory(id)}
                name={name}
                image={`http://localhost:5050/${image}`}
                active={id === activeCategory}
              />
            ))}
        </div>
        <Heading>Popular restaurants</Heading>
        <div className="category__products">
          {products &&
            products.map(({ thumbs, name, short, rating, id }) => (
              <ProductGridItem
                id={id}
                imgSrc={thumbs.normal}
                caption={name}
                description={short}
                rating={rating}
                key={id}
              />
            ))}
        </div>
      </div>
    </AuthorizedLayout>
  );
};

export default Category;
