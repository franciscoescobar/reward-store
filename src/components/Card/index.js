import React from "react";
import HorizontalDivider from "../HorizontalDivider";
import Points from "../Points";
import { Link } from "react-router-dom";
import { Wrapper, Image, TextWrapper } from "./styled";
import { useSelector } from "react-redux";
const Card = ({ product }) => {
  const userPoints = useSelector(state => state.userReducer.user.points);
  const { _id, category, cost, img, name } = product;
  const { url } = img;
  return (
    <Link to={`/product/${_id}`}>
      <Wrapper>
        <Points
          relative={true}
          amount={cost}
          unaffordable={userPoints <= cost}
        />
        <Image src={url} />
        <HorizontalDivider />
        <TextWrapper>
          <h4>{category}</h4>
          <h3>{name}</h3>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
};

export default Card;
