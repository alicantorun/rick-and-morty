import styled from "styled-components";

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
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
