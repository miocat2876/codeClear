import { combineReducers } from 'redux';
import colorTheme from "../colorTheme";
import browserSize from "../browserSize";

const rootReducer = combineReducers({
	colorTheme,
	browserSize: browserSize
});

export default rootReducer;