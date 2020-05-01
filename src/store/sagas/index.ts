import { all, takeLatest } from "redux-saga/effects";
import { Types as CharactersTypes } from "../ducks/characters";
import { getCharacters } from "./characters";

export default function* rootSaga() {
  return yield all([
    takeLatest(CharactersTypes.GET_CHARACTERS_REQUEST, getCharacters),
  ]);
}
