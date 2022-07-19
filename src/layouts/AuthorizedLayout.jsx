import React from "react";
import { Layout, Main } from ".";
import AppNavigation from "../components/AppNavigation";
import NavBar from "../components/NavBar";

const AuthorizedLayout = ({ children }) => {
  return (
    <React.Fragment>
      <AppNavigation />
      <Layout>
        <Main>{children}</Main>
      </Layout>
      <NavBar />
    </React.Fragment>
  );
};

export default AuthorizedLayout;
