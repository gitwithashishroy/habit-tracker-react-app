import { combineReducers } from "redux";
import { habitsReducer } from "./habitReducer";

const rootReducer = combineReducers({
  habitsReducer
});

export default rootReducer;
