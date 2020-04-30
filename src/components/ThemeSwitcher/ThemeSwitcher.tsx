// ThemeSwitcher.js
import React from "react";

import { ToggleContainer } from "./ThemeSwitcher.styles";
import { ReactComponent as MortyIcon } from "../../assets/morty.svg";
import { ReactComponent as RickIcon } from "../../assets/rick.svg";

const ThemeSwitcher = ({ theme, toggleTheme }: any) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <RickIcon />
      <MortyIcon />
    </ToggleContainer>
  );
};

export default ThemeSwitcher;
