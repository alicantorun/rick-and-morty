import React from "react";
import {
  TextWrapper,
  Wrapper,
  Header,
  Title,
  Image,
  Body,
} from "./CharacterCard.styles";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { daysBetween } from "../../utils";
interface Props {
  created?: string;
  species?: string;
  status?: string;
  gender?: string;
  location?: any;
  image?: string;
  name?: string;
  origin?: any;
  id?: string;
}

const CharacterCard: React.FC<Props> = ({
  location,
  species,
  created,
  status,
  gender,
  origin,
  image,
  name,
  id,
}) => {
  let history = useHistory();
  function handleViewCharacterClick() {
    history.push({
      pathname: `${ROUTES.CHARACTER_LIST}/${id}`,
    });
  }

  return (
    <Wrapper onClick={handleViewCharacterClick}>
      <Header>
        <Image src={image} />
        <Title>
          <h2>{name}</h2>
          <p>
            id: {id} - created {daysBetween(created)} days ago
          </p>
        </Title>
      </Header>
      <Body>
        <TextWrapper>
          <span>Species:</span>
          <span>{species}</span>
        </TextWrapper>
        <TextWrapper>
          <span>Status:</span>
          <span>{status}</span>
        </TextWrapper>
        <TextWrapper>
          <span>Location:</span>
          <span>{location && location.name}</span>
        </TextWrapper>
        <TextWrapper>
          <span>Gender:</span>
          <span>{gender}</span>
        </TextWrapper>
        <TextWrapper>
          <span>Origin:</span>
          <span>{origin && origin.name}</span>
        </TextWrapper>
      </Body>
    </Wrapper>
  );
};

export default CharacterCard;
