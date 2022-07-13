// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

function increse(value) {
	return {
		type: INCREMENT,
		value
	}
}

const increse = (value) => ({
	type: INCREMENT,
	value
})