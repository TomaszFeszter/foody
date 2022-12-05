import React, { useContext } from "react";
import AppNavigation from "../components/AppNavigation";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import useMediaQuery from "../hooks/useMediaQuery";
import { Cell, Grid, Page } from "../layouts";
import Cart from "../features/Cart";
import { AuthContext } from "../context/Auth";

export const AppLayout = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const { user } = useContext(AuthContext);

  return (
    <Page>
      <Grid>
        {isDesktop ? (
          <>
            <Cell size={2} modifier="center-horizontally">
              <Menu open />
            </Cell>
            <Cell size={6}>
              <NavBar />
              {children}
            </Cell>
            <Cell size={4} modifier="center-horizontally">
              <Cart />
            </Cell>
          </>
        ) : (
          <Cell>
            <AppNavigation user={user} />
            {children}
            <NavBar />
          </Cell>
        )}
      </Grid>
    </Page>
  );
};

export default AppLayout;
