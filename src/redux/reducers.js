import {combineReducers} from "redux";
import {twitterReducer} from "../reducers/twitter";

export const rootReducer = combineReducers({
    twitter: twitterReducer
});
