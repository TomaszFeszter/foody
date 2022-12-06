import React from "react";
import LogIn from "../../features/Login";
import SignUp from "../../features/SignUp";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Cell, Grid, Page } from "../../layouts";

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  // TODO przemyśl nazwy klas
  return (
    <Page>
      <Grid>
        {isDesktop ? (
          <>
            <Cell size={6} modifier="center-horizontally pt-20 pb-20">
              <LogIn />
            </Cell>
            <Cell size={6} modifier="center-horizontally pt-20 pb-20">
              <SignUp />
            </Cell>
          </>
        ) : (
          <Cell modifier={"center-vertically"}>
            <SignUp />
          </Cell>
        )}
      </Grid>
    </Page>
  );
};

export default SignUpPage;
