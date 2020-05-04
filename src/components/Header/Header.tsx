import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Logo, ContentWrapper } from "./Header.styles";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LogoImg from "../../assets/logo.png";
import Container from "../Container";

function Header(props: any) {
  let history = useHistory();
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <Logo
            onClick={() => {
              history.push("/");
            }}
            src={LogoImg}
          />
          <ThemeSwitcher />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

export default Header;
