import React from "react";
import styled from "styled-components";
const StyledDivider = styled.div`
  border: 1px solid #cbcbcb;
  width: 80%;
  margin: 18px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const HorizontalDivider = () => (
  <Wrapper>
    <StyledDivider />
  </Wrapper>
);

export default HorizontalDivider;
