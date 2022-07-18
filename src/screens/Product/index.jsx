import React from "react";
import { useParams } from "react-router-dom";
import Link from "../../components/Links/links";

const Product = () => {
  const { productId } = useParams();
  return (
    <div>
      Product. To id Produktu: {productId}{" "}
      <Link href="/">Go to home page!</Link>
    </div>
  );
};

export default Product;
