const DESKTOP = 'browerSize/DESKTOP';

const XXL = 1500;
const XL  = 1400;
const LG  = 1200;
const MD  = 992;
const SM  = 768;
const XS  = 576;

export function checkBrowserSize(){
	return {
		type    : DESKTOP,
		desktop : {
			width : XL
		},
	}
}

const initialState = {...checkBrowserSize()};

export default function browserSize(state = initialState, action){
	switch (action.type) {
		default:
			return state;
	}
}