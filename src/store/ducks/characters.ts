export const Types = {
  GET_ALL_CHARACTERS_REQUEST: "GET_ALL_CHARACTERS_REQUEST",
  GET_ALL_CHARACTERS_SUCCESS: "GET_ALL_CHARACTERS_SUCCESS",
  GET_ALL_CHARACTERS_ERROR: "GET_ALL_CHARACTERS_ERROR",
};

export interface CharactersState {
  loading: boolean;
  error: boolean;
  data: [];
}

export type CharactersActionType =
  | { type: "GET_ALL_CHARACTERS_REQUEST"; payload: any }
  | { type: "GET_ALL_CHARACTERS_SUCCESS"; payload: any }
  | { type: "GET_ALL_CHARACTERS_ERROR"; payload: any };

export const CHARACTERS_INITIAL_STATE: CharactersState = {
  loading: true,
  error: false,
  data: [],
};

export const Creators = {
  getAllCharacters: (pageId: any) => ({
    type: Types.GET_ALL_CHARACTERS_REQUEST,
    pageId,
  }),

  getAllCharactersSuccess: (data: any) => ({
    type: Types.GET_ALL_CHARACTERS_SUCCESS,
    payload: { data },
  }),

  getAllCharactersFailure: () => ({
    type: Types.GET_ALL_CHARACTERS_ERROR,
  }),
};

const charactersReducer = (
  state = CHARACTERS_INITIAL_STATE,
  { type, payload }: CharactersActionType
) => {
  switch (type) {
    case Types.GET_ALL_CHARACTERS_REQUEST:
      return {
        ...CHARACTERS_INITIAL_STATE,
      };

    case Types.GET_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };

    case Types.GET_ALL_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default charactersReducer;
