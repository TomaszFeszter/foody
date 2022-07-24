import React from "react";
import LogIn from "../../features/Login";
import SignUp from "../../features/SignUp";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Cell, Grid, Page } from "../../layouts";

const LogInPage = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  // TODO przemyśl nazwy klas
  return (
    <Page>
      <Grid>
        {isDesktop ? (
          <>
            <Cell size={6} modifier="center-horizontally">
              <LogIn />
            </Cell>
            <Cell size={6} modifier="center-horizontally">
              <SignUp />
            </Cell>
          </>
        ) : (
          <Cell modifier={"center-horizontally"}>
            <LogIn />
          </Cell>
        )}
      </Grid>
    </Page>
  );
};

export default LogInPage;
