import React from "react";
import styled from "styled-components";
import product from "../../assets/product-pics/AcerAspire-x1.png";
import coin from "../../assets/icons/coin.svg";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #26c6da;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70%;
  width: 70%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #fefefe;
`;
const Left = styled.div`
  display: flex;
  border: 2px solid #26c6da;
  height: 300px;
  width: 450px;
  background: white;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  li {
    width: 60%;
  }
  .points {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #26c6da;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  img {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: white;
  }
  h2 {
    align-self: center;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 900;
  }
`;
const RedeemButton = styled.button`
  font-size: 16px;
  margin-top: 24px;
  height: 50px;
  background-color: #26c6da;
  border-radius: 30px;
  color: white;
  font-weight: 700;
`;
const Product = () => (
  <Container>
    <Wrapper>
      <Left>
        <ul>
          <li>AVAILABLE POINTS</li>
          <li className="points">
            5900 <img alt="coin" src={coin} />
          </li>
          <li>COST OF PRODUCT</li>
          <li className="points">
            1000 <img alt="coin2" src={coin} />
          </li>
          <li>REMAINING POINTS AFTER PURCHASE</li>
          <li className="points">
            4900 <img alt="coin3" src={coin} />
          </li>
        </ul>
      </Left>
      <Right>
        <h2>Acer Aspire</h2>
        <img alt="product" src={product} />
        <RedeemButton>Redeem Now</RedeemButton>
      </Right>
    </Wrapper>
  </Container>
);

export default Product;
