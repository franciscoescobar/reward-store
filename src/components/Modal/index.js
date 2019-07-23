import React from "react";
import { Wrapper, Button } from "./styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
const Modal = () => {
  const history = useSelector(state => state.historyReducer);
  const answer =
    history.response === "You've redeem the product successfully"
      ? "Keep Buying"
      : "Menu";
  return (
    <Wrapper id="open-modal">
      <div>
        <h1>{history.loading ? <Skeleton /> : history.response}</h1>
        <Link to="/">
          <Button>{history.loading ? <Skeleton /> : answer}</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Modal;
