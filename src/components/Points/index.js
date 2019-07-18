import React from "react";
import coin from "../../assets/icons/coin.svg";
import { StyledPoints, Amount, Icon } from "./styled";
const Points = ({ relative, amount, cant }) => (
  <StyledPoints className={relative ? "relative" : ""}>
    <Amount>{amount}</Amount>
    <Icon src={coin} />
  </StyledPoints>
);

export default Points;
