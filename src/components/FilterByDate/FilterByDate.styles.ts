import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    flex-grow: 1;
    width: 100%;
    input {
      height: 40px;
      width: 100%;
      border: none;
      border-radius: 10px;
      box-sizing: border-box;
    }
  }
  > div:nth-of-type(1) {
    margin-right: 10px;
  }
  > div:nth-of-type(2) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 40px;
  display: inline-block;
  border: none;

  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;
