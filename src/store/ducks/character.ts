export const Types = {
  GET_CHARACTER_REQUEST: "subject/GET_CHARACTER_REQUEST",
  GET_CHARACTER_SUCCESS: "subject/GET_CHARACTER_SUCCESS",
  GET_CHARACTER_ERROR: "subject/GET_CHARACTER_ERROR",
};

interface CharacterState {
  loading: boolean;
  error: boolean;
  data: {};
}

const INITIAL_STATE: CharacterState = {
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

const subject = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case Types.GET_CHARACTER_REQUEST:
      return {
        ...INITIAL_STATE,
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

export default subject;
