import React, { useState, useEffect } from "react";
import icon from "../../assets/aerolab-logo.svg";
import shop1 from "../../assets/icons/buy-blue.svg";
import shop2 from "../../assets/icons/buy-white.svg";
import Points from "../Points";
import { StyledBar, Icon, UserName } from "./styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHistory } from "../../actions";
import { getUserRequest } from "../../thunks/user";
import { addPoints } from "../../thunks/addPoints";

const AppBar = ({ product }) => {
  const historyOpen = useSelector(state => state.toggle);
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);
  const [shop, setShop] = useState(shop2);
  const onShopToggle = () => {
    if (historyOpen) {
      setShop(shop2);
    } else {
      setShop(shop1);
    }
    dispatch(toggleHistory());
  };
  const handleClickPoints = () => {
    addPoints()(dispatch);
  };
  useEffect(() => {
    getUserRequest()(dispatch);
  }, []);

  return (
    <StyledBar className={product !== true ? "" : "product"}>
      <Link to="/reward-store">
        <Icon src={icon} />
      </Link>
      <UserName>{user.user.name}</UserName>
      {product !== true ? (
        <Icon className="shop" src={shop} onClick={onShopToggle} />
      ) : null}
      <div onClick={handleClickPoints}>
        <Points
          amount={user.user.points}
          pointsLoading={user.pointsLoading}
          userLoading={user.userLoading}
        />
      </div>
    </StyledBar>
  );
};

export default AppBar;
