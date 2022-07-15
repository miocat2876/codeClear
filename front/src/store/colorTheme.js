const GRAY_YELLOW = 'colorTheme/GRAY_YELLOW';

export function colorGrayYellow(){
	return {
		type : GRAY_YELLOW,
		color : {
			first  : 'rgba(60,60,60,1)',
			second : 'rgba(95,95,95,1)',
		}
	}
}

const initialState = {...colorGrayYellow()};

export default function colorTheme(state = initialState, action){
	switch (action.type) {
		case colorGrayYellow:
			return {...state,...action.color};
		default:
			return state;
	}
}