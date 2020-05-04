import { all, takeLatest } from "redux-saga/effects";
import { Types as CharactersTypes } from "../ducks/characters";
import { Types as CharacterTypes } from "../ducks/character";
import { getAllCharacters } from "./characters";
import { getCharacter } from "./character";

export default function* rootSaga() {
  return yield all([
    takeLatest(CharactersTypes.GET_ALL_CHARACTERS_REQUEST, getAllCharacters),
    takeLatest(CharacterTypes.GET_CHARACTER_REQUEST, getCharacter),
  ]);
}
