import React from "react";
import icon from "../../assets/aerolab-logo.svg";
import Points from "../Points";
import { StyledBar, Icon, UserName } from "./styled";
import { Link } from "react-router-dom";
const AppBar = () => (
  <StyledBar>
    <Link to="/">
      <Icon src={icon} />
    </Link>
    <UserName>John Wick</UserName>
    <Points />
  </StyledBar>
);

export default AppBar;
