import React from "react";
import { Spinner } from "./styled";
const LoadingDots = () => (
  <Spinner>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </Spinner>
);

export default LoadingDots;
