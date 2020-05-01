import React from "react";
import {
  Wrapper,
  Image,
  Body,
  TextWrapper,
  Header,
  Title,
} from "./CharacterCard.styles";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

interface Props {
  image?: string;
  species?: string;
  status?: string;
  lastLocation?: string;
  gender?: string;
  origin?: string;
  name?: string;
  id?: string;
  created?: string;
}

const CharacterCard: React.FC<Props> = ({
  image,
  species,
  status,
  lastLocation,
  gender,
  origin,
  name,
  id,
  created,
}) => {
  let history = useHistory();
  function handleViewCharacterClick() {
    history.push({
      pathname: `${ROUTES.CHARACTERS_LIST}/${id}`,
    });
  }
  return (
    <Wrapper>
      <Header>
        <Image src={image} onClick={handleViewCharacterClick} />
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
};

export default CharacterCard;
