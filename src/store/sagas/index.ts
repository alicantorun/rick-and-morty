import { all, takeLatest } from "redux-saga/effects";
import { Types as CharactersTypes } from "../ducks/characters";
import { Types as CharacterTypes } from "../ducks/character";
import { getCharacters } from "./characters";
import { getCharacter } from "./character";

export default function* rootSaga() {
  return yield all([
    takeLatest(CharactersTypes.GET_CHARACTERS_REQUEST, getCharacters),
    takeLatest(CharacterTypes.GET_CHARACTER_REQUEST, getCharacter),
  ]);
}
