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
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gnD_vx3rCs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

* {
  font-family: 'Montserrat', "Open Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
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

  button, input, select {
    font-size: 16px;
  }

  span {
    font-size: 13px;
  }
  h2{
    font-size: 18px;
  }
}`;
