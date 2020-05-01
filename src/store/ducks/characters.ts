export const Types = {
  GET_CHARACTERS_REQUEST: "subject/GET_CHARACTERS_REQUEST",
  GET_CHARACTERS_SUCCESS: "subject/GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_ERROR: "subject/GET_CHARACTERS_ERROR",
  GET_ALL_CHARACTERS_REQUEST: "subject/GET_ALL_CHARACTERS_REQUEST",
  GET_ALL_CHARACTERS_SUCCESS: "subject/GET_ALL_CHARACTERS_SUCCESS",
  GET_ALL_CHARACTERS_ERROR: "subject/GET_ALL_CHARACTERS_ERROR",
};

interface CharactersState {
  loading: boolean;
  error: boolean;
  data: [];
}

const INITIAL_STATE: CharactersState = {
  loading: true,
  error: false,
  data: [],
};

export const Creators = {
  getCharacters: (pageId: any) => ({
    type: Types.GET_CHARACTERS_REQUEST,
    pageId,
  }),

  getCharactersSuccess: (data: any) => ({
    type: Types.GET_CHARACTERS_SUCCESS,
    payload: { data },
  }),

  getCharactersFailure: () => ({
    type: Types.GET_CHARACTERS_ERROR,
  }),

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

const subject = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case Types.GET_CHARACTERS_REQUEST:
      return {
        ...INITIAL_STATE,
      };

    case Types.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };

    case Types.GET_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case Types.GET_ALL_CHARACTERS_REQUEST:
      return {
        ...INITIAL_STATE,
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

export default subject;
