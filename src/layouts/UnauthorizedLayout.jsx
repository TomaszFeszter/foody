import React from "react";
import { Layout, Main } from ".";

const UnauthorizedLayout = ({ firstColumn, secondColumn }) => {
  return (
    <Layout center>
      <Main>{firstColumn}</Main>
      <Main>{secondColumn}</Main>
    </Layout>
  );
};

export default UnauthorizedLayout;
