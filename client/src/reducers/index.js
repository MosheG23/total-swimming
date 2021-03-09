import userReducer from "./userReducer";
import { reducer as reduxReducer } from "redux-form"
import { combineReducers } from "redux";

export default combineReducers({
    user: userReducer,
    form: reduxReducer,
});