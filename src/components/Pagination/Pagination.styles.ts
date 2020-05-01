import styled from "styled-components";

export const Wrapper = styled.div`
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
      background: palevioletred;
    }
  }

  .previousPage {
    padding: 6px 16px;
    outline: none;
    cursor: pointer;
    border-radius: 4;
    &:hover {
      background: palevioletred;
    }
  }

  .pageLink {
    color: red;
    padding: 16px;
    outline: none;
    cursor: pointer;
    width: 40;
    height: 40;
    border-radius: 50%;
    display: block;
    text-align: center;
    &:hover {
      background-color: yellow;
      color: red;
    }
  }

  .active {
    background-color: yellow;
    color: blue;
  }
`;

// width: 300px;

// border-radius: 10px;
// border: 2px solid red;

// transition: all 600ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

// background-color: rgb(${(props) => props.theme.global.paper});

// a {
//   color: ${(props) => props.theme.global.color};
// }
