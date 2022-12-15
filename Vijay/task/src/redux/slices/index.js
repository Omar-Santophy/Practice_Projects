import { combineReducers } from "redux";
import  TodoSlice  from "./todoSlice";
export default combineReducers({
  todo:TodoSlice
});