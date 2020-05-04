import { createGlobalStyle } from "styled-components";

// TODO
const colorPalette = {
  lightShades: "242, 242, 241",
  lightPaperShades: "200, 200, 200",
  lightAccent: "139, 142, 149",
  mainBrand: "221, 136, 25",
  darkAccent: "133, 129, 137",
  darkShades: "32, 30, 32",
  darkPaperShades: "10, 10, 10",

  success: "95, 153, 81",
  warning: "221, 136, 25",
  error: "240, 5, 80",
};

const baseTheme = {
  actions: {
    error: colorPalette.error,
    info: colorPalette.darkShades,
    primary: colorPalette.mainBrand,
    success: colorPalette.success,
    warning: colorPalette.warning,
  },
  palette: {
    darkAccent: colorPalette.darkAccent,
    darkShades: colorPalette.darkShades,
    lightAccent: colorPalette.lightAccent,
    lightShades: colorPalette.lightShades,
    mainBrand: colorPalette.mainBrand,
  },
};

export const darkTheme = {
  ...baseTheme,
  // TODO CHANGE
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  global: {
    bg: colorPalette.darkShades,
    paper: colorPalette.darkPaperShades,
    color: colorPalette.lightShades,
    link: colorPalette.mainBrand,
    linkHover: colorPalette.lightAccent,
    contrastColor: colorPalette.darkShades,
  },
};

export const lightTheme = {
  ...baseTheme,

  // TODO CHANGE
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  global: {
    bg: colorPalette.lightShades,
    paper: colorPalette.lightPaperShades,
    color: colorPalette.darkShades,
    link: colorPalette.mainBrand,
    linkHover: colorPalette.darkAccent,
    contrastColor: colorPalette.lightShades,
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, sans-serif;
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    background-color: rgb(${(props) => props.theme.global.bg});
    color: rgb(${(props) => props.theme.global.color});
    transition: background 0.2s ease-out;
  }
`;
