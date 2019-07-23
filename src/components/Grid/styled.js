import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .loading-wrapper {
    margin-top: 5rem;
    justify-content: center;
  }
`;
export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(80%);
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;
