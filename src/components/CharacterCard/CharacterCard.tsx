import React from "react";
import {
  Wrapper,
  Image,
  Body,
  TextWrapper,
  Header,
  Title,
} from "./CharacterCard.styles";

function CharacterCard({
  image = "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
  species = "test",
  status = "test",
  lastLocation = "test",
  gender = "test",
  origin = "test",
  name = "test",
  id = "0",
  created = "test years",
}) {
  return (
    <Wrapper>
      <Header>
        <Image src={image} />
        <Title>
          <h2>{name}</h2>
          <p>
            id: {id} - created {created} ago
          </p>
        </Title>
      </Header>
      <Body>
        <TextWrapper>
          <span>Species:</span>
          <p>{species}</p>
        </TextWrapper>
        <TextWrapper>
          <span>Status:</span>
          <p>{status}</p>
        </TextWrapper>
        <TextWrapper>
          <span>Last Location:</span>
          <p>{lastLocation}</p>
        </TextWrapper>
        <TextWrapper>
          <span>Gender:</span>
          <p>{gender}</p>
        </TextWrapper>
        <TextWrapper>
          <span>Origin:</span>
          <p>{origin}</p>
        </TextWrapper>
      </Body>
    </Wrapper>
  );
}

export default CharacterCard;
