import React from "react";
import styled from "styled-components";
import Card from "../Card";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(80%);
`;
const Grid = () => (
  <Wrapper>
    <GridWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </GridWrapper>
  </Wrapper>
);

export default Grid;
