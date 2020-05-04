import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 600ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  background-color: rgb(${(props) => props.theme.global.paper});
  a {
    color: ${(props) => props.theme.global.color};
  }
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.div`
  > * {
    padding-left: 20px;
    padding-right: 20px;
  }
  > h2,
  p {
    margin-bottom: 5px;
  }

  h2 {
    margin-top: 0;
  }
  bottom: 0;
  width: 100%;
  opacity: 0.9;
  position: absolute;
  background: rgb(${(props) => props.theme.actions.warning});
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
`;

export const Body = styled.div``;

export const TextWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    white-space: nowrap;
  }
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
