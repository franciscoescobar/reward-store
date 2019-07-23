import styled from "styled-components";
export const Wrapper = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 290px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .relative {
    position: relative;
    align-self: flex-end;
    top: 0;
    right: 0;
    margin: 8px 8px 0 0;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 80%;
  margin-top: -30px;
`;
export const TextWrapper = styled.div`
  margin-top: -16px;
  display: flex;
  width: 80%;
  flex-direction: column;
  h4 {
    margin: 12px 0;
    color: #cbcbcb;
    font-weight: 400;
    font-size: 14px;
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
  }
`;
