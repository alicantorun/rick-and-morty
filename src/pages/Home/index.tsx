import React from "react";
import { Wrapper, Button, Headline, Content, Hero } from "./Home.styles";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import HeroImg from "../../assets/hero.png";

function Home() {
  let history = useHistory();

  function handleClick() {
    history.push(ROUTES.CHARACTER_LIST);
  }

  return (
    <Wrapper>
      <Content>
        <Hero src={HeroImg}></Hero>
        <Headline>
          “Listen Morty, Sometimes coding is a lot more art than coding. A lot
          of people don’t get that.- Coder Rick”
        </Headline>
        <Button onClick={handleClick}>Start</Button>
      </Content>
    </Wrapper>
  );
}

export default Home;
