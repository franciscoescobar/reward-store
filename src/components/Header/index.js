import React from "react";
import styled from "styled-components";
import header from "../../assets/header-x1.png";
const StyledHeader = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-top: 64px;
`;
const Header = () => <StyledHeader src={header} />;

export default Header;
