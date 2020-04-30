import styled from "styled-components";

interface ToggleContainerProps {
  readonly lightTheme: boolean;
}

export const ToggleContainer = styled.button<ToggleContainerProps>`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.35s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }: any) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }: any) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;
