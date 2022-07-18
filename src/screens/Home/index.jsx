import React from "react";
import Link from "../../components/Links";
import ProductListItem from "../../components/ProductListItem";

const Home = () => {
  return (
    <div>
      Home <Link href="/products/some-id">Go to product page</Link>
      <ProductListItem
        imgSrc={
          "https://www.pngall.com/wp-content/uploads/2016/05/Burger-PNG-Image.png"
        }
        caption="The Macdonalds"
        description="Classic cheesburger"
        price="$23.99"
      />
    </div>
  );
};

export default Home;
