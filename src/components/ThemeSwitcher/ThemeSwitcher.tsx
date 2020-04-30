import React from "react";

import { ToggleContainer } from "./ThemeSwitcher.styles";
import { ReactComponent as MortyIcon } from "../../assets/morty.svg";
import { ReactComponent as RickIcon } from "../../assets/rick.svg";

import { useThemeContext } from "../../ThemeProvider";

const ThemeSwitcher = () => {
  const value = useThemeContext();
  const isLight = value?.theme === "light";

  return (
    <ToggleContainer lightTheme={isLight} onClick={value?.toggleTheme}>
      <RickIcon />
      <MortyIcon />
    </ToggleContainer>
  );
};

export default ThemeSwitcher;
