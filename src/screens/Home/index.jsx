import React from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Modal from "../../components/Modal";
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
      <Button long>Create an account</Button>
      <Button secondary long>
        login
      </Button>
      <Modal>To jest modal!</Modal>
    </Box>
  );

  return (
    <UnauthorizedLayout firstColumn={firstColumn} secondColumn={secondColumn} />
  );
};

export default Home;
