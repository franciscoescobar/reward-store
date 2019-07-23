import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 223px;
  margin: 8px;
  height: calc(33% - 16px);
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  @media only screen and (max-width: 600px) {
    width: 80%;
    justify-content: center;
  }
`;
export const Left = styled.div`
  width: 80px;
  height: 50%;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;
export const Right = styled.div`
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 36%;
    object-fit: cover;
  }
  h4 {
    font-size: 14px;
    font-weight: 400;
    margin-right: 5px;
  }
`;
export const Middle = styled.div`
  width: 130px;
  margin-left: 8px;
  @media only screen and (max-width: 600px) {
    flex: 1;
  }
  h3 {
    color: #cbcbcb;
    font-size: 14px;
  }
  h4 {
    margin: 5px 0;
    font-size: 12px;
  }
  p {
    font-size: 10px;
  }
`;
