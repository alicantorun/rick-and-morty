import { call, put } from "redux-saga/effects";

import { getEntireCharactersList } from "../../services/api";
import { Creators as CharactersCreators } from "../ducks/characters";

export function* getAllCharacters() {
  try {
    const data = yield call(getEntireCharactersList);

    data.pop();
    const modifiedData = { results: data };

    yield put(CharactersCreators.getAllCharactersSuccess(modifiedData));
  } catch (err) {
    yield put(CharactersCreators.getAllCharactersFailure());
  }
}
