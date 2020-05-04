import { combineReducers } from "redux";

import characters from "./characters";
import character from "./character";
import filters from "./filters";

const rootReducer = combineReducers({
  characters,
  character,
  filters,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
