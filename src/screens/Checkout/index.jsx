import React, { useContext, useEffect } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Input, { Checkbox, Field } from "../../components/Inputs";
import useFetch from "../../hooks/useFetch";
import API from "../../utils/api";
import { AuthContext } from "../../context/Auth";
import Form from "../../components/Form";
import { CartContext } from "../../context/Cart";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";
import BackButton from "../../components/BackButton";
import useMediaQuery from "../../hooks/useMediaQuery";

const Checkout = () => {
  const isDesktop = useMediaQuery("(max-width: 1200px)");
  const { token, user } = useContext(AuthContext);
  const { cart, putPaymentMethod, putAddress, createCart } =
    useContext(CartContext);
  const { data, run, isLoading } = useFetch();
  const completeOrderReq = useFetch();
  const navigate = useNavigate();
  const activePaymentMethod = cart.paymentMethod;

  useEffect(() => {
    if (isLoading || data) return;
    run(API.GET_PAYMENT_METHODS(), { token });
  }, [data, isLoading, run, token]);

  const completeOrder = async (formData) => {
    try {
      await putAddress({
        postalCode: formData.get("postalCode"),
        city: formData.get("city"),
        street: formData.get("street"),
        phoneNumber: formData.get("phoneNumber"),
      });
      await completeOrderReq.run(API.POST_ORDER(), {
        token,
        method: "POST",
        body: JSON.stringify({ cartId: cart.id }),
      });

      createCart();

      navigate("/success");
    } catch (error) {
      navigate("/fail");
    }
  };

  useEffect(() => {
    if (cart.products.length === 0) {
      navigate("/");
    }
  }, [cart.products.length, navigate]);

  const deliveryFee =
    data &&
    activePaymentMethod &&
    data.find((payMethod) => payMethod.id === activePaymentMethod).price;

  console.log(
    data && data.find((payMethod) => payMethod.id === activePaymentMethod)
  );
  return (
    <AppLayout>
      <Form styles="checkout" onSubmit={completeOrder}>
        {isDesktop && <BackButton />}
        <section className="checkout__user-data">
          <Heading size="big">Delivery method</Heading>
          <Field label="Postal Code">
            <Input name="postalCode" placeholder="Postal Code" required />
          </Field>
          <Field label="City">
            <Input name="city" placeholder="City" required />
          </Field>
          <Field label="Street">
            <Input name="street" placeholder="Street" required />
          </Field>
          <Field label="Phone Number">
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              defaultValue={user.phoneNumbers}
              required
            />
          </Field>
        </section>
        <section className="checkout__payment">
          <Heading tag="h2" size="big">
            Payment
          </Heading>
          <div className="checkout__payment__methods">
            <Input type="hidden" required />
            {data &&
              data.map((payMethod) => (
                <div
                  key={payMethod.id}
                  onClick={() => putPaymentMethod(payMethod.id)}
                  className={`checkout__payment__methods__item ${
                    payMethod.id === activePaymentMethod
                      ? "checkout__payment__methods__item--active"
                      : ""
                  }`}
                >
                  <img
                    src={`http://localhost:5050${payMethod.image}`}
                    alt={payMethod.name}
                  />
                </div>
              ))}
          </div>
          <Field label="Pay on arrival" id="payArrival">
            <Checkbox
              id="payArrival"
              onChange={() => putPaymentMethod(null)}
              checked={activePaymentMethod === null}
            />
          </Field>
        </section>
        <section className="checkout__summary">
          <div className="checkout__summary__label">
            <Heading size="small">Delivery Fee</Heading>
            <Heading>${deliveryFee ? deliveryFee : 0}</Heading>
          </div>
          <div className="checkout__summary__label">
            <Heading size="small">Subtotal</Heading>
            <Heading>${cart.total - deliveryFee}</Heading>
          </div>
          <hr />
          <div className="checkout__summary__label">
            <Heading size="small">Total</Heading>
            <Heading>${cart.total}</Heading>
          </div>
          <Button long type="submit">
            Proceed to Payment
          </Button>
        </section>
      </Form>
    </AppLayout>
  );
};

export default Checkout;
