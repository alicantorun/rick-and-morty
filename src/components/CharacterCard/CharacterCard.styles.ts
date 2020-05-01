import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;

  border-radius: 10px;
  border: 2px solid red;

  transition: all 600ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  background-color: rgb(${(props) => props.theme.global.paper});

  a {
    color: ${(props) => props.theme.global.color};
  }
`;

export const Image = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.div`
  > * {
    padding-left: 20px;
    padding-right: 20px;
  }

  width: 100%;
  opacity: 0.8;
  position: absolute;
  bottom: 0px;
  background: rgb(32, 35, 41);
  a {
    color: ${(props) => props.theme.global.color};
  }
`;

export const Header = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export const Body = styled.div``;

export const TextWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
