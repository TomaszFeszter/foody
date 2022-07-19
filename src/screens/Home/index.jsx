import React from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Link from "../../components/Links";
import UnauthorizedLayout from "../../layouts/UnauthorizedLayout";
import foodImage from "./images/food.png";

const Home = () => {
  const firstColumn = (
    <Box center>
      <Heading size={"big"}>
        Order from your favourite stores or vendors
      </Heading>
      <img src={foodImage} alt="Some food" />
    </Box>
  );

  const secondColumn = (
    <Box center column>
      <Link to="/sign-up">
        <Button long>Create account</Button>
      </Link>
      <Link to="/log-in">
        <Button secondary long>
          Login
        </Button>
      </Link>
    </Box>
  );

  return (
    <UnauthorizedLayout firstColumn={firstColumn} secondColumn={secondColumn} />
  );
};

export default Home;
