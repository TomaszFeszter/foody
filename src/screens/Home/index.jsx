import React from "react";
import Link from "../../components/Links/links";

const Home = () => {
  return (
    <div>
      Home <Link href="/products/some-id">Go to product page</Link>
    </div>
  );
};

export default Home;
