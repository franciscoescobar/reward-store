import React from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import HorizontalDivider from "../../components/HorizontalDivider";
import Grid from "../../components/Grid";
import { Wrapper } from "./styled";
import AppBar from "../../components/AppBar";
const Home = () => (
  <>
    <AppBar />

    <Header />
    <Wrapper>
      <Filters />
    </Wrapper>
    <HorizontalDivider />
    <Grid />
  </>
);

export default Home;
