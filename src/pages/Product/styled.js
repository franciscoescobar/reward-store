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
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  display: flex;
  border: 2px solid #15dbff;
  height: 300px;
  width: 450px;
  background: white;
  @media only screen and (max-width: 1200px) {
    height: 150px;
    width: 80%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media only screen and (max-width: 1200px) {
      justify-content: space-around;
      margin: 0;
      padding: 0;
    }
  }
  li {
    width: 60%;
    @media only screen and (max-width: 1200px) {
      width: 75%;
      font-size: 16px;
      margin: 0;
    }
    @media only screen and (max-width: 750px) {
      width: 75%;
      font-size: 12px;
      margin: 0;
    }
  }
  .points {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #15dbff;
    @media only screen and (max-width: 1200px) {
      width: 25%;
      > img {
        max-width: 24px;
      }
    }
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
  > div {
    @media only screen and (max-width: 800px) {
      width: 80%;
    }
  }
  img {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: white;
    @media only screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
      backgroun-size: cover;
    }
  }
  h2 {
    align-self: center;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 900;
    @media only screen and (max-width: 1200px) {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
export const RedeemButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  margin-top: 24px;
  height: 50px;
  background-color: #15dbff;
  border-radius: 30px;
  color: white;
  font-weight: 700;
  @media only screen and (max-width: 800px) {
    width: 80%;
  }
`;
