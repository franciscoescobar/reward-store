import React from "react";
import { Wrapper, Text } from "./styled";
const Chip = ({ text, selected, onChipClick }) => (
  <Wrapper
    className={selected ? "selected" : ""}
    onClick={() => onChipClick(text)}
  >
    <Text>{text}</Text>
  </Wrapper>
);

export default Chip;
