import React from "react";
import { ThemeProvider } from "styled-components";
import { mount, shallow } from "enzyme";
import { darkTheme } from "../theme/theme";

const themeMock = darkTheme;

const ThemeProviderWrapper = ({ children }: any) => (
  <ThemeProvider theme={themeMock}>{children}</ThemeProvider>
);

export const shallowWithTheme = (tree: any) =>
  shallow(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

export const mountWithTheme = (tree: any) =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });
