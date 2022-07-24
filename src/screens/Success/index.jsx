import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import AuthorizedLayout from "../../layouts/AuthorizedLayout";
import { ReactComponent as SuccessImg } from "./images/success.svg";

const Success = () => {
  const navigate = useNavigate();
  return (
    <AuthorizedLayout>
      <div className="success">
        <section className="success__info">
          <SuccessImg />
          <Heading size="big">Your order has been successfully placed</Heading>
          <Heading size="small">
            Sit and relax while your orders is being worked on. It’ll take 5min
            before you get it
          </Heading>
        </section>
        <Button long onClick={() => navigate("/")}>
          Go back to home
        </Button>
      </div>
    </AuthorizedLayout>
  );
};

export default Success;
