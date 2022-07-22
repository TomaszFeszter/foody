import React, { useContext } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { Logo } from "../../components/Icons";
import Link from "../../components/Links";
import { AuthContext } from "../../context/Auth";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout";
import foodImage from "./images/food.png";

const Home = () => {
  const contextVal = useContext(AuthContext);
  console.log(contextVal);
  const firstColumn = (
    <div className="flex-column pt-16">
      <Logo className="logo mb-16" />
      <Heading size={"big"} styles={"mb-16"}>
        Choose from a wide range of delicious meals
      </Heading>
      <img src={foodImage} alt="Some food" />
    </div>
  );

  const secondColumn = (
    <div className="flex-column">
      <Link to="/sign-up">
        <Button long styles={"mb-10"}>
          Create account
        </Button>
      </Link>
      <Link to="/log-in">
        <Button secondary long>
          Login
        </Button>
      </Link>
    </div>
  );

  return (
    <UnauthorizedLayout firstColumn={firstColumn} secondColumn={secondColumn} />
  );
};

export default Home;
