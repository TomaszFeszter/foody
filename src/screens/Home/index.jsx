import React from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { Logo } from "../../components/Icons";
import Link from "../../components/Links";
import { Cell, Grid, Page } from "../../layouts";
import foodImage from "./images/food.png";

const Home = () => {
  return (
    <Page>
      <Grid>
        <Cell modifier="pt-20 pb-20">
          <div className="flex-column">
            <Logo className="logo mb-16" />
            <Heading size={"big"} styles={"mb-16"}>
              Choose from a wide range of delicious meals
            </Heading>
            <img src={foodImage} alt="Some food" />
          </div>
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
        </Cell>
      </Grid>
    </Page>
  );
};

export default Home;
