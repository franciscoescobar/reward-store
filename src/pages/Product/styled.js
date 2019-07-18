import styled from "styled-components";

export const ProductPage = styled.div`
  .product {
    position: absolute;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #15dbff;
  overflow-y: hidden;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70%;
  width: 70%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #fefefe;
`;
export const Left = styled.div`
  display: flex;
  border: 2px solid #15dbff;
  height: 300px;
  width: 450px;
  background: white;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  li {
    width: 60%;
  }
  .points {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #15dbff;
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  img {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: white;
  }
  h2 {
    align-self: center;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 900;
  }
`;
export const RedeemButton = styled.button`
  font-size: 16px;
  margin-top: 24px;
  height: 50px;
  background-color: #15dbff;
  border-radius: 30px;
  color: white;
  font-weight: 700;
`;
