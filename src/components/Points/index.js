import React from "react";
import coin from "../../assets/icons/coin.svg";
import { StyledPoints, Amount, Icon } from "./styled";
const Points = ({ relative }) => (
  <StyledPoints className={relative ? "relative" : ""}>
    <Amount>1300</Amount>
    <Icon src={coin} />
  </StyledPoints>
);

export default Points;
