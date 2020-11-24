import { combineReducer } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer;
