import { call, put } from "redux-saga/effects";

import { api } from "../../services/api";

import { Creators as CharactersCreators } from "../ducks/characters";

export function* getCharacters({ pageId }: any) {
  console.log(pageId);
  try {
    const { data } = yield call(api.get, `/?page=${pageId}`);

    yield put(CharactersCreators.getCharactersSuccess(data));
  } catch (err) {
    yield put(CharactersCreators.getCharactersFailure());
  }
}
