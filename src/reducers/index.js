import toggleHistoryReducer from "./historyToggle";
import historyReducer from "./history";
import productsReducer from "./products";
import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userReducer,
  productsReducer,
  historyReducer,
  toggle: toggleHistoryReducer
});
export default allReducers;
