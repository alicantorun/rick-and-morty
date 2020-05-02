import { combineReducers } from "redux";

import characters from "./characters";
import character from "./character";
import filters from "./filters";

const rootReducer = combineReducers({
  characters,
  character,
  filters,
});

export default rootReducer;
// export type RootState = ReturnType<typeof characters>;
