import styled from "styled-components";

export const EpisodesWrapper = styled.div`
  background-color: rgb(${(props) => props.theme.global.paper});
  transition: all 600ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  border-radius: 10px;
  border-radius: 10px;
  height: 420px;
  overflow: scroll;
  a {
    color: ${(props) => props.theme.global.color};
  }

  > ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 8px;
  }
`;

export const HeaderWrapper = styled.div`
  background-color: rgb(${(props) => props.theme.palette.mainBrand});
  transition: all 600ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  display: flex;
  margin-bottom: 20px;

  a {
    color: ${(props) => props.theme.global.color};
  }

  > h1 {
    margin: 10px;
  }
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
  margin-top: 20px;
  margin-bottom: 20px;
`;
