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

interface LocationProps {
  name?: string;
  url?: string;
}
interface OriginProps {
  name?: string;
  url?: string;
}

interface Props {
  created?: string;
  species?: string;
  status?: string;
  gender?: string;
  location?: LocationProps;
  image?: string;
  name?: string;
  origin?: OriginProps;
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
  const locationName = location && location.name;
  const originName = origin && origin.name;
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
          <span>{locationName}</span>
        </TextWrapper>
        <TextWrapper>
          <span>Gender:</span>
          <span>{gender}</span>
        </TextWrapper>
        <TextWrapper>
          <span>Origin:</span>
          <span>{originName}</span>
        </TextWrapper>
      </Body>
    </Wrapper>
  );
};

export default CharacterCard;
