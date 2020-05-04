import React from "react";

import CharacterCard from "../../../../components/CharacterCard/CharacterCard";
import { EpisodesWrapper, HeaderWrapper } from "./styles";
import Container from "../../../../components/Container";
import { Grid, Cell } from "styled-css-grid";

const ExampleView = (props: any) => {
  const { loading, data, error } = props;

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

  return (
    <Container style={{ marginTop: "20px" }}>
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
          <Cell width={2}>
            <Grid
              columns={"1f 1fr"}
              rows={"60px 1fr"}
              areas={["header ", "contentleft "]}
            >
              <Cell area="header">
                <HeaderWrapper>
                  <h1>Episodes List</h1>
                </HeaderWrapper>
              </Cell>
              <Cell area="contentleft">
                <EpisodesWrapper>
                  <Grid
                    columns="repeat(auto-fit, minmax(300px, 1fr))"
                    gap="20px"
                  >
                    <Cell>
                      <ul style={{ width: "100%", marginTop: "20px" }}>
                        {episode &&
                          episode.slice(0, 15).map((i: any) => <li>{i}</li>)}
                      </ul>
                    </Cell>
                    <Cell>
                      <ul style={{ width: "100%", marginTop: "20px" }}>
                        {episode &&
                          episode.slice(15).map((i: any) => <li>{i}</li>)}
                      </ul>
                    </Cell>
                  </Grid>
                </EpisodesWrapper>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      )}
    </Container>
  );
};

export default ExampleView;
