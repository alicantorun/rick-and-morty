import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(${(props) => props.theme.global.bg});
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 200px;
  border-radius: 20px;
  padding: 10px;
  background-color: rgb(${(props) => props.theme.palette.mainBrand});
  border: none;
  a {
    color: ${(props) => props.theme.global.color};
  }
  cursor: pointer;
`;

export const Hero = styled.img`
  height: 300px;
`;

export const Headline = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
