import { combineReducers } from 'redux';
import colorTheme from "../colorTheme";
import browserSize from "../browserSize";

const rootReducer = combineReducers({
	colorTheme,
	browserSize
});

export default rootReducer;