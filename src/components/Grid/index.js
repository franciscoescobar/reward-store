import React, { useEffect } from "react";
import Card from "../Card";
import { Wrapper, GridWrapper } from "./styled";
import { getProductsRequest } from "../../thunks/products";
import { useSelector, useDispatch } from "react-redux";
import LoadingDots from "../LoadingDots";
const Grid = () => {
  const products = useSelector(state => state.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsRequest()(dispatch);
  }, []);
  return (
    <Wrapper>
      <GridWrapper className={products.loading ? "loading-wrapper" : ""}>
        {products.loading ? (
          <LoadingDots />
        ) : (
          products.products.map(product => {
            return <Card key={product._id} product={product} />;
          })
        )}
      </GridWrapper>
    </Wrapper>
  );
};

export default Grid;
