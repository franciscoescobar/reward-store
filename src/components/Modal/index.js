import React, { useEffect } from "react";
import { Wrapper, Button } from "./styled";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserRequest } from "../../thunks/user";
import Skeleton from "react-loading-skeleton";

const Modal = () => {
  const history = useSelector(state => state.historyReducer);
  const dispatch = useDispatch();
  const answer =
    history.response === "You've redeem the product successfully"
      ? "Keep Buying"
      : "Menu";
  useEffect(() => {
    if (answer) {
      getUserRequest()(dispatch);
    }
  }, [answer]);
  return (
    <Wrapper id="open-modal">
      <div>
        <h1>{history.loading ? <Skeleton /> : history.response}</h1>
        <Link to="/reward-store">
          <Button>{history.loading ? <Skeleton /> : answer}</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Modal;
