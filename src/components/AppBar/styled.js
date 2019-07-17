import styled from "styled-components";
export const StyledBar = styled.div`
  position: absolute;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
`;
export const Icon = styled.img`
  height: 48px;
  width: 48px;
  margin-left: 24px;
`;
export const UserName = styled.h4`
  width: calc(100% - 48px);
  text-align: right;
  font-size: 18px;
  font-weight: 400;
  margin-right: 24px;
  color: #464646;
`;
