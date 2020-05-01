import React, { useEffect } from "react";
import { Provider } from "react-redux";

import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ThemeProvider from "./ThemeProvider";
import store from "./store";

import { Creators as CharactersCreators } from "./store/ducks/characters";
// import Grid from "styled-components-grid";
import { Grid, Cell } from "styled-css-grid";

import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "./components/CharacterCard/CharacterCard";

interface CharactersState {
  loading: boolean;
  error: boolean;
  data: CharactersData;
}

interface Characters {
  characters: CharactersState;
}

interface CharactersData {
  info: [];
  results: [];
}

function App() {
  const dispatch = useDispatch();
  const selectCharacters = (state: Characters) => state.characters;

  const characters = useSelector(selectCharacters);

  console.log(characters);

  useEffect(() => {
    dispatch(CharactersCreators.getCharacters(3));
  }, [dispatch]);

  return (
    <div>
      <Grid columns={2} gap="2px">
        {characters &&
          characters.data &&
          characters.data.results &&
          characters.data.results.map((character): any => {
            const { image, id, gender, name, species, status } = character;
            return (
              <Cell>
                <CharacterCard
                  image={image}
                  id={id}
                  gender={gender}
                  name={name}
                  species={species}
                  status={status}
                />
              </Cell>
            );
          })}
      </Grid>
      ;
    </div>
  );
}

export default App;
