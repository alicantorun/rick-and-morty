import React from "react";

import CharacterCard from "../../../../components/CharacterCard/CharacterCard";
import { EpisodesWrapper, HeaderWrapper, Button } from "./styles";
import Container from "../../../../components/Container";
import { Grid, Cell } from "styled-css-grid";
import { useHistory } from "react-router-dom";

const ExampleView = (props: any) => {
  const { loading, data, error } = props;
  let history = useHistory();

  const {
    location,
    episode,
    created,
    species,
    status,
    gender,
    image,
    name,
    id,
  } = data;

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px;" }}>
      {loading && !error && <div>LOADING</div>}
      {!loading && error && <div>ERROR</div>}
      {!loading && !error && (
        <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="20px">
          <Cell>
            <CharacterCard
              location={location}
              species={species}
              created={created}
              gender={gender}
              status={status}
              image={image}
              name={name}
              id={id}
            />
          </Cell>
          <Cell>
            <HeaderWrapper>
              <h1>Episodes List</h1>
            </HeaderWrapper>
            <EpisodesWrapper>
              <ul style={{ width: "100%", marginTop: "20px" }}>
                {episode && episode.map((i: any) => <li>{i}</li>)}
              </ul>
            </EpisodesWrapper>
          </Cell>
        </Grid>
      )}
      <Button onClick={handleGoBack}>Go Back</Button>
    </Container>
  );
};

export default ExampleView;
