import React from "react";
import coin from "../../assets/icons/coin.svg";
import LoadingDots from "../LoadingDots";
import { StyledPoints, Amount, Icon } from "./styled";
import { useSelector } from "react-redux";
const Points = ({
  relative,
  amount,
  userLoading,
  pointsLoading,
  unaffordable
}) => {
  const userPoints = useSelector(state => state.userReducer.user.points);
  return (
    <StyledPoints
      className={
        relative && unaffordable
          ? "relative unaffordable"
          : relative
          ? "relative"
          : ""
      }
    >
      {userLoading || pointsLoading ? (
        <LoadingDots />
      ) : (
        <>
          <Amount className={unaffordable ? "unaffordable" : ""}>
            {unaffordable ? `You need ${amount - userPoints}` : amount}
          </Amount>
          <Icon src={coin} />
        </>
      )}
    </StyledPoints>
  );
};

export default Points;
