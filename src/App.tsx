import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { useDarkMode } from "./hooks/useDarkMode";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { GlobalStyle } from "./theme/theme";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
