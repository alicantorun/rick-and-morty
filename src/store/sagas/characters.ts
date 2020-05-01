import { call, put } from "redux-saga/effects";

import { api, getEntireCharactersList } from "../../services/api";

import { Creators as CharactersCreators } from "../ducks/characters";

export function* getCharacters({ pageId }: any) {
  try {
    const { data } = yield call(api.get, `/?page=${pageId}`);
    console.log(data);

    yield put(CharactersCreators.getCharactersSuccess(data));
  } catch (err) {
    yield put(CharactersCreators.getCharactersFailure());
  }
}

export function* getAllCharacters({ pageId }: any) {
  try {
    const data = yield call(getEntireCharactersList);

    data.pop();
    const modifiedData = { results: data };

    yield put(CharactersCreators.getCharactersSuccess(modifiedData));
  } catch (err) {
    yield put(CharactersCreators.getCharactersFailure());
  }
}
