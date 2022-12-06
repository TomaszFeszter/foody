import React, { useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import API from "../utils/api";
import { AuthContext } from "./Auth";

export const ProductContext = React.createContext(null);

const productsInCategories = new Map();
const productsInCache = new Map();

export const ProductProvider = ({ children }) => {
  const categoryDataReq = useFetch();
  const productsDataReq = useFetch();
  const productDataReq = useFetch();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!productsDataReq.data) return;
    productsDataReq.data.forEach((product) =>
      productsInCache.set(product.id, product)
    );
  }, [productsDataReq.data]);

  const getCategories = () => {
    if (categoryDataReq.isLoading) return;
    categoryDataReq.run(API.GET_CATEGORIES(), { token });
  };

  const getProductsInCategory = async (id) => {
    if (productsDataReq.isLoading) return;
    const data = productsInCategories.get(id);
    if (data) {
      productsDataReq.setData(data);
      return;
    }
    const productsInCategory = await productsDataReq.run(
      API.GET_PRODUCTS_IN_CATEGORY(id),
      { token }
    );
    productsInCategories.set(id, productsInCategory);
  };

  const getProduct = async (id) => {
    if (productDataReq.isLoading) return;

    const data = productsInCache.get(id);
    if (data) {
      productDataReq.setData(data);
      return;
    }
    const productData = await productDataReq.run(API.GET_PRODUCT(id));
    productsInCache.setData(id, productData);
  };

  return (
    <ProductContext.Provider
      value={{
        getCategories,
        getProductsInCategory,
        getProduct,
        categories: categoryDataReq.data,
        products: productsDataReq.data,
        product: productDataReq.data,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
