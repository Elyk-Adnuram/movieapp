/* importing of the required modules */
import { combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  user,
});
/*  exporting of the component */
export default rootReducer;
