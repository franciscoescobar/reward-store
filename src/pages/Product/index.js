import React, { useEffect } from "react";
import coin from "../../assets/icons/coin.svg";
import {
  Container,
  Wrapper,
  Left,
  RedeemButton,
  Right,
  ProductPage
} from "./styled";
import AppBar from "../../components/AppBar";
import { useSelector, useDispatch } from "react-redux";
import { redeemProduct } from "../../thunks/redeemProduct";
import LoadingDots from "../../components/LoadingDots";
import Skeleton from "react-loading-skeleton";
import Modal from "../../components/Modal";
import { getProductsRequest } from "../../thunks/products";
import { getUserRequest } from "../../thunks/user";
const Product = ({ match }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);
  const products = useSelector(state => state.productsReducer.products);
  const selectedProduct = products.filter(
    product => product._id === productId
  )[0];

  const handleRedeemButton = () => {
    redeemProduct(productId)(dispatch);
    getUserRequest()(dispatch);
  };
  useEffect(() => {
    getProductsRequest()(dispatch);
  }, []);
  return (
    <ProductPage>
      <AppBar product={true} />
      <Container>
        <Wrapper>
          <Left>
            <ul>
              <li>AVAILABLE POINTS</li>
              {user.pointsLoading || user.userLoading ? (
                <LoadingDots />
              ) : (
                <li className="points">
                  {user.user.points || <Skeleton />}
                  <img alt="coin" src={coin} />
                </li>
              )}

              <li>COST OF PRODUCT</li>
              {user.pointsLoading || user.userLoading ? (
                <LoadingDots />
              ) : (
                <li className="points">
                  {selectedProduct ? selectedProduct.cost : <Skeleton />}
                  <img alt="coin2" src={coin} />
                </li>
              )}

              <li>REMAINING POINTS AFTER PURCHASE</li>
              {user.pointsLoading || user.userLoading ? (
                <LoadingDots />
              ) : (
                <li className="points">
                  {selectedProduct ? (
                    user.user.points - selectedProduct.cost
                  ) : (
                    <Skeleton />
                  )}
                  <img alt="coin3" src={coin} />
                </li>
              )}
            </ul>
          </Left>
          <Right>
            <h2>{selectedProduct ? selectedProduct.name : <Skeleton />}</h2>
            {selectedProduct && (!user.pointsLoading || !user.userLoading) ? (
              <div>
                <img alt="product" src={selectedProduct.img.url} />
              </div>
            ) : (
              <div>
                <Skeleton />
              </div>
            )}
            {selectedProduct && !user.user.points <= !selectedProduct.cost ? (
              <RedeemButton href="#open-modal" onClick={handleRedeemButton}>
                Redeem Now
              </RedeemButton>
            ) : (
              ""
            )}
          </Right>
        </Wrapper>
        <Modal />
      </Container>
    </ProductPage>
  );
};

export default Product;
