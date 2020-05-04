import styled from "styled-components";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: rgb(${(props) => props.theme.palette.mainBrand});
  box-sizing: border-box;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  height: 40px;
  border: none;
  width: 100%;
`;
