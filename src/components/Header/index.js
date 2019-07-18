import React, { useState, useEffect, useRef } from "react";
import header from "../../assets/header-x1.png";
import { Wrapper, StyledHeader, StyledShop } from "./styled";
import CardSmall from "../CardSmall";
import Skeleton from "react-loading-skeleton";
import api from "../../utils/api";
const Header = () => {
  const [shop, setShop] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const isInitialMount = useRef(true);
  const fetchHistory = async () => {
    try {
      setHistoryLoading(true);
      console.log(historyLoading);
      const his = await api.getHistory();
      setHistory(his);
    } catch (error) {
      console.log(error);
    } finally {
      setHistoryLoading(false);
      console.log(historyLoading);
    }
  };
  const handleClick = () => {
    setShop(!shop);
  };

  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <Wrapper onClick={handleClick}>
      <StyledHeader src={header} />
      <StyledShop className={shop ? "open" : null}>
        {history.map((elem, index) => {
          return <CardSmall card={elem} key={index} />;
        })}
        <hr />
      </StyledShop>
    </Wrapper>
  );
};

export default Header;
