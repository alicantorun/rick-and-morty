import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  ul {
    list-style: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .next {
    margin-left: 16px;
  }

  .previous {
    margin-right: 16px;
  }

  .nextPage {
    padding: 6px 16px;
    outline: none;
    cursor: pointer;
    border-radius: 4;
    &:hover {
      background-color: rgb(${(props) => props.theme.palette.mainBrand});
    }
  }

  .previousPage {
    padding: 6px 16px;
    outline: none;
    cursor: pointer;
    border-radius: 4;
    &:hover {
      background-color: rgb(${(props) => props.theme.palette.mainBrand});
    }
  }

  .pageLink {
    padding: 16px;
    outline: none;
    cursor: pointer;
    width: 40;
    height: 40;
    border-radius: 50%;
    display: block;
    text-align: center;
    &:hover {
      background-color: rgb(${(props) => props.theme.palette.mainBrand});
      color: rgb(${(props) => props.theme.global.contrastColor});
    }
  }

  .active {
    background-color: rgb(${(props) => props.theme.palette.mainBrand});
    color: rgb(${(props) => props.theme.global.contrastColor}) !important;
    a > {
      background-color: rgb(${(props) => props.theme.palette.mainBrand});
      color: rgb(${(props) => props.theme.global.contrastColor}) !important;
    }
  }
`;
