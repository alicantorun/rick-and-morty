import { call, put } from "redux-saga/effects";

import { api } from "../../services/api";

import { Creators as CharacterCreators } from "../ducks/character";

export function* getCharacter({ characterId }: any) {
  console.log(characterId);
  try {
    const { data } = yield call(api.get, `/${characterId}`);

    yield put(CharacterCreators.getCharacterSuccess(data));
  } catch (err) {
    yield put(CharacterCreators.getCharacterFailure());
  }
}
