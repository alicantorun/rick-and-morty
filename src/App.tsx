import React from "react";
// import { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from "./theme/theme";
// import { useDarkMode } from "./hooks/useDarkMode";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
// import { GlobalStyle } from "./theme/theme";
import ThemeProvider from "./ThemeProvider";

function App() {
  // const [theme, toggleTheme, componentMounted] = useDarkMode();

  // const themeMode = theme === "light" ? lightTheme : darkTheme;

  // if (!componentMounted) {
  //   return <div />;
  // }

  console.log("render");
  return (
    // <ThemeProvider theme={themeMode}>
    //   <GlobalStyle />
    <ThemeProvider>
      <div>
        <ThemeSwitcher
        //  theme={theme} toggleTheme={toggleTheme}
        />
      </div>
    </ThemeProvider>

    // </ThemeProvider>
  );
}

export default App;
