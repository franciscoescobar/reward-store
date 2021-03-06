import styled from "styled-components";
export const StyledPoints = styled.div`
  height: 36px;
  margin-right: 24px;
  border-radius: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  background: #e5e5e5;
  cursor: pointer;
  .unaffordable {
    color: #a70000;
    min-width: 100px;
  }
`;
export const Icon = styled.img`
  height: 28px;
  width: 28px;
`;
export const Amount = styled.p`
  font-size: 18px;
  margin-right: 8px;
  font-weight: 400;
`;
