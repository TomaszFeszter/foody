import React, { useContext, useEffect } from "react";
import Heading from "../../components/Heading";
import ProductListItem from "../../components/ProductListItem";
import { AuthContext } from "../../context/Auth";
import { CartContext } from "../../context/Cart";
import useFetch from "../../hooks/useFetch";
import AuthorizedLayout from "../../layouts/AuthorizedLayout";
import API from "../../utils/api";

const OrderHistory = () => {
  const { token } = useContext(AuthContext);
  const { putItemToCart } = useContext(CartContext);
  const { data, run, isLoading } = useFetch();

  useEffect(() => {
    if (data || isLoading) return;
    run(API.GET_ORDERS(), { token });
  }, [data, isLoading, run, token]);

  return (
    <AuthorizedLayout>
      <div className="orders">
        <Heading size="big">Your orders</Heading>
        <section className="orders__list">
          {data &&
            data.map((order) => {
              const date = new Date(order.createdAt);
              return (
                <div className="order__list__item" key={order.id}>
                  <Heading>{date.toLocaleString()}</Heading>
                  {order.products.map((product) => {
                    return (
                      <ProductListItem
                        imgSrc={product.thumbs.small}
                        caption={product.name}
                        description={product.short}
                        price={product.price}
                        orderAgain={() => putItemToCart(product)}
                        flag="Complete"
                        addToCart={false}
                        key={product.id}
                      />
                    );
                  })}
                </div>
              );
            })}
        </section>
      </div>
    </AuthorizedLayout>
  );
};

export default OrderHistory;
