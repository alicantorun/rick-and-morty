import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(${(props) => props.theme.global.paper});
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  margin: 0;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
