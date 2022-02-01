import addItems from "./addItem";
import { combineReducers } from "redux";
console.log("addItem", addItems);
const rootReducers = combineReducers({
    addItems
})

export default rootReducers;