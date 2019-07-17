import React from "react";
import HorizontalDivider from "../HorizontalDivider";
import image from "../../assets/product-pics/AcerAspire-x1.png";
import Points from "../Points";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 290px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .relative {
    position: absolute;
    margin-top: 16px;
    margin-left: 200px;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;
const Image = styled.img`
  margin-top: 20px;
  object-fit: cover;
  width: 80%;
`;
const TextWrapper = styled.div`
  margin-top: -16px;
  display: flex;
  width: 80%;
  flex-direction: column;
  h4 {
    margin: 12px 0;
    color: #cbcbcb;
    font-weight: 400;
    font-size: 14px;
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
  }
`;
const Card = () => (
  <Link to="/product/1">
    <Wrapper>
      <Points relative={true} />
      <Image src={image} />
      <HorizontalDivider />
      <TextWrapper>
        <h4>Laptops</h4>
        <h3>Acer Aspire E1-522</h3>
      </TextWrapper>
    </Wrapper>
  </Link>
);

export default Card;
