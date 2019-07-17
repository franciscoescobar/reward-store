import React, { useState } from "react";
import Chip from "../Chip";
import {
  Wrapper,
  ProductText,
  VerticalDivider,
  SortText,
  ChipsWrapper
} from "./styled";

const Filters = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const handleChipClick = text => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    if (text === "Most Recent") {
      setFirst(true);
    }
    if (text === "Lowest Price") {
      setSecond(true);
    }
    if (text === "Highest Price") {
      setThird(true);
    }
  };
  return (
    <Wrapper>
      <ProductText>32 products</ProductText>
      <VerticalDivider />
      <SortText>Sort by:</SortText>
      <ChipsWrapper>
        <Chip
          text="Most Recent"
          selected={first}
          onChipClick={handleChipClick}
        />
        <Chip
          text="Lowest Price"
          selected={second}
          onChipClick={handleChipClick}
        />
        <Chip
          text="Highest Price"
          selected={third}
          onChipClick={handleChipClick}
        />
      </ChipsWrapper>
    </Wrapper>
  );
};

export default Filters;
