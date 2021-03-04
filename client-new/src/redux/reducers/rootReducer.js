import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import globalReducer from "./globalReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  cartReducer,
  globalReducer,
  shopReducer,
});

export default rootReducer;
