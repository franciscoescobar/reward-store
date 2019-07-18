import React, { useEffect, useState } from "react";
import coin from "../../assets/icons/coin.svg";
import {
  Container,
  Wrapper,
  Left,
  RedeemButton,
  Right,
  ProductPage
} from "./styled";
import api from "../../utils/api";
import AppBar from "../../components/AppBar";
const Product = ({ match }) => {
  const [selectedProduct, setSelectedProduct] = useState({ img: { url: "" } });
  const [points, setPoints] = useState(0);
  const [productsLoading, setProductsLoading] = useState(false);
  const [redeemLoading, setRedeemLoading] = useState(false);
  const [pointsLoading, setPointsLoading] = useState(false);
  const productId = match.params.id;
  const fetchProducts = async () => {
    try {
      setProductsLoading(true);
      const products = await api.getProducts();
      const product = products.filter(product => product._id === productId)[0];
      setSelectedProduct(product);
    } catch (error) {
      console.log(error);
    } finally {
      setProductsLoading(false);
    }
  };
  const pushRedeemProduct = async () => {
    try {
      setRedeemLoading(true);
      const redeemProduct = await api.redeemProduct(productId);
      console.log(redeemProduct);
    } catch (error) {
      console.log(error);
    } finally {
      setRedeemLoading(false);
    }
  };
  const getUserPoints = async () => {
    try {
      setPointsLoading(true);
      const user = await api.getUser();
      setPoints(user.points);
    } catch (error) {
      console.log(error);
    } finally {
      setPointsLoading(false);
    }
  };
  const handleRedeem = () => {
    pushRedeemProduct();
  };
  useEffect(() => {
    fetchProducts();
    getUserPoints();
    return () => {};
  }, []);
  return (
    <ProductPage>
      <AppBar product={true} />
      <Container>
        <Wrapper>
          <Left>
            <ul>
              <li>AVAILABLE POINTS</li>
              <li className="points">
                {points} <img alt="coin" src={coin} />
              </li>
              <li>COST OF PRODUCT</li>
              <li className="points">
                {selectedProduct.cost} <img alt="coin2" src={coin} />
              </li>
              <li>REMAINING POINTS AFTER PURCHASE</li>
              <li className="points">
                {points - selectedProduct.cost} <img alt="coin3" src={coin} />
              </li>
            </ul>
          </Left>
          <Right>
            <h2>{selectedProduct.name}</h2>
            <img alt="product" src={selectedProduct.img.url} />
            <RedeemButton onClick={handleRedeem}>Redeem Now</RedeemButton>
          </Right>
        </Wrapper>
      </Container>
    </ProductPage>
  );
};

export default Product;
