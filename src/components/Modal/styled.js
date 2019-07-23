import styled from "styled-components";
export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;

  &:target {
    opacity: 1;
    pointer-events: auto;
  }
  & > div {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
    @media only screen and (max-width: 800px) {
      width: 250px;
    }
    > h1 {
      @media only screen and (max-width: 800px) {
        font-size: 24px;
      }
    }
  }
`;
export const Button = styled.div`
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
    font-size: 16px;
  }
`;
