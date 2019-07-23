import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin-top: 24px;
  align-items: center;
  text-align: center;
`;
export const ProductText = styled.p`
  font-size: 16px;
  margin: 0 8px;
  color: #464646;
  font-weight: 700;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
export const VerticalDivider = styled.div`
  border: 1px solid #cbcbcb;
  height: 20px;
`;
export const SortText = styled.p`
  font-size: 16px;
  color: #cbcbcb;
  margin: 0 8px;
  font-weight: 700;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
export const ChipsWrapper = styled.div`
  flex: 1;
  display: flex;
  .selected {
    color: white;
    background: #15dbff;
  }
`;
