/**
 * @flow
 */

import React, { useContext, createContext, useEffect, useState } from "react";

import { darkTheme, lightTheme } from "./theme/theme";
import { GlobalStyle } from "./theme/theme";

import { ThemeProvider as SCThemeProvider } from "styled-components";

interface ThemeContextInterface {
  toggleTheme: () => void;
  theme: string;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = (mode: any) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
    setComponentMounted(true);
  }, []);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  const value: ThemeContextInterface = {
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={themeMode}>
        <GlobalStyle />
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
}
