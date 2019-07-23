import styled from "styled-components";
export const StyledHeader = styled.img`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
export const StyledShop = styled.div`
  overflow: auto;
  position: absolute;
  z-index: 30;
  display: flex;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding-left: 40px;
  padding-top: 5px;
  background: #15dbff;
  transition-timing-function: ease-in;
  transition: 0.2s;
  transform: translateX(200%);

  > hr {
    border: 1px solid #15dbff;
  }
`;
export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 300px;
  .open {
    transition-timing-function: ease-out;
    transition: 0.25s;
    transform: translateX(0);
  }
  .loading-wrapper {
    align-items: center;
    justify-content: center;
  }
`;
