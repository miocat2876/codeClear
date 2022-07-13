const DARK = 'colorTheme/DARK';
const RED = 'colorTheme/RED';

export function colorDark(value){
	return {
		type : DARK,
		color : {
			value
		}
	}
}

export function colorRed(value){
	return {
		type : RED,
		color : {
			value
		}
	}
}

const initialState = {};

export default function colorTheme(state = initialState, action){
	switch (action.type) {
		case DARK:
			return {...state,...action.color};
		case RED:
			return {...state,...action.color};
		default:
			return state;
	}
}