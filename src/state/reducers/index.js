import { combineReducers } from "redux";
import userReducer from "./userReducer";


const reducers = combineReducers({
 
    id:userReducer
})

export default reducers;