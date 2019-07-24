import React, { useState } from "react";
import Chip from "../Chip";
import {
  Wrapper,
  ProductText,
  VerticalDivider,
  SortText,
  ChipsWrapper
} from "./styled";
import { sortHigher, sortLower, sortRecent } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
const Filters = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer);
  const handleChipClick = text => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    if (text === "Most Recent") {
      setFirst(true);
      dispatch(sortRecent());
    }
    if (text === "Lowest Price") {
      setSecond(true);
      dispatch(sortLower());
    }
    if (text === "Highest Price") {
      setThird(true);
      dispatch(sortHigher());
    }
  };
  return (
    <Wrapper>
      <ProductText>32 products</ProductText>
      <VerticalDivider />
      <SortText>Sort by:</SortText>
      {!products.loading ? (
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
      ) : null}
    </Wrapper>
  );
};

export default Filters;
