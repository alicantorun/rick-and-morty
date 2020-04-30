import { darkTheme, lightTheme } from "./src/theme/theme";

type DarkTheme = typeof darkTheme;
type LightTheme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends DarkTheme {}
  export interface DefaultTheme extends LightTheme {}
}
