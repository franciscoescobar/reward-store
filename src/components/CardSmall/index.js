import React from "react";
import coin from "../../assets/icons/coin.svg";
import { Wrapper, Left, Middle, Right } from "./styled";
const SmallCard = ({ card }) => {
  const { category, cost, createDate, img, name } = card;
  const { url } = img;
  return (
    <Wrapper>
      <Left>
        <img alt="product" src={url} />
      </Left>
      <Middle>
        <h3>{category}</h3>
        <h4>{name}</h4>
        <p>{createDate}</p>
      </Middle>
      <Right>
        <h4>{cost}</h4>
        <img alt="coin" src={coin} />
      </Right>
    </Wrapper>
  );
};

export default SmallCard;
