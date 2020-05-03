import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
