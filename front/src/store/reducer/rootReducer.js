import { combineReducers } from 'redux';
import colorTheme from "../colorTheme";
import browserSetting from "../browserSetting";

const rootReducer = combineReducers({
	colorTheme,
	browserSize: browserSetting
});

export default rootReducer;