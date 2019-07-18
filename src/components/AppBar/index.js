import React, { useState, useEffect } from "react";
import icon from "../../assets/aerolab-logo.svg";
import shop1 from "../../assets/icons/buy-blue.svg";
import shop2 from "../../assets/icons/buy-white.svg";
import Points from "../Points";
import { StyledBar, Icon, UserName } from "./styled";
import { Link } from "react-router-dom";
import api from "../../utils/api";

const AppBar = ({ product }) => {
  const [shop, setShop] = useState(shop2);
  const [user, setUser] = useState({});
  const [points, setPoints] = useState(0);
  const [pointsLoading, setPointsLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const onShopToggle = () => {
    if (shop === shop1) {
      setShop(shop2);
    } else {
      setShop(shop1);
    }
  };
  const fetchUser = async () => {
    try {
      setUserLoading(true);
      const us = await api.getUser();
      setUser(us);
      setPoints(us.points);
    } catch (error) {
      console.log(error);
    } finally {
      setUserLoading(false);
    }
  };
  const addPoints = async () => {
    try {
      setPointsLoading(true);
      const poin = await api.addPoints();
      setPoints(poin["New Points"]);
    } catch (error) {
      console.log(error);
    } finally {
      setPointsLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
    return () => {};
  }, []);
  return (
    <StyledBar className={product !== true ? "" : "product"}>
      <Link to="/">
        <Icon src={icon} />
      </Link>
      <UserName>{user.name}</UserName>
      {product !== true ? (
        <Icon className="shop" src={shop} onClick={onShopToggle} />
      ) : null}

      <div onClick={addPoints}>
        <Points amount={points} />
      </div>
    </StyledBar>
  );
};

export default AppBar;
