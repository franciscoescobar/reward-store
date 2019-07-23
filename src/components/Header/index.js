import React, { useEffect } from "react";
import header from "../../assets/header-x1.png";
import { Wrapper, StyledHeader, StyledShop } from "./styled";
import CardSmall from "../CardSmall";
import { useSelector, useDispatch } from "react-redux";
import { getHistoryRequest } from "../../thunks/history";
import LoadingDots from "../LoadingDots";

const Header = () => {
  const historyToggle = useSelector(state => state.toggle);
  const history = useSelector(state => state.historyReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    getHistoryRequest()(dispatch);
  }, []);

  return (
    <Wrapper>
      <StyledHeader src={header} />

      <StyledShop
        className={
          historyToggle && history.loading
            ? "open loading-wrapper"
            : historyToggle
            ? "open"
            : null
        }
      >
        {history.loading ? (
          <LoadingDots />
        ) : (
          history.history.map((elem, index) => {
            return <CardSmall card={elem} key={index} />;
          })
        )}
        <hr />
      </StyledShop>
    </Wrapper>
  );
};

export default Header;
