export const Types = {
  GET_CHARACTER_REQUEST: "GET_CHARACTER_REQUEST",
  GET_CHARACTER_SUCCESS: "GET_CHARACTER_SUCCESS",
  GET_CHARACTER_ERROR: "GET_CHARACTER_ERROR",
};

export interface CharacterState {
  loading: boolean;
  error: boolean;
  data: {};
}

export type CharacterActionType =
  | { type: "GET_ALL_CHARACTER_REQUEST"; payload: any }
  | { type: "GET_ALL_CHARACTER_SUCCESS"; payload: any }
  | { type: "GET_ALL_CHARACTER_ERROR"; payload: any };

export const CHARACTER_INITIAL_STATE: CharacterState = {
  loading: true,
  error: false,
  data: {},
};

export const Creators = {
  getCharacter: (characterId: any) => ({
    type: Types.GET_CHARACTER_REQUEST,
    characterId,
  }),

  getCharacterSuccess: (data: any) => ({
    type: Types.GET_CHARACTER_SUCCESS,
    payload: { data },
  }),

  getCharacterFailure: () => ({
    type: Types.GET_CHARACTER_ERROR,
  }),
};

const characterReducer = (
  state = CHARACTER_INITIAL_STATE,
  { type, payload }: any
) => {
  switch (type) {
    case Types.GET_CHARACTER_REQUEST:
      return {
        ...CHARACTER_INITIAL_STATE,
      };

    case Types.GET_CHARACTER_SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };

    case Types.GET_CHARACTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default characterReducer;
