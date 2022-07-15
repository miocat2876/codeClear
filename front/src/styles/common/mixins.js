import './variables';
import {$FS, $LG, $ST} from "./variables";

export const fx = (option = {}) => {
	const defaultOption = {
		$h : $FS,
		$v : $ST,
		$w : 'wrap',
		$direction : 'row'
	};
	const {$h,$v,$w,$direction} = {...defaultOption,...option};

	return `
		display        : 'flex',
		justifyContent : ${$h},
		alignItems     : ${$v},
		flexWrap       : ${$w},
		flexDirection  : ${$direction},
	`
}

export const fxWrap = (option = {})  =>{
	const defaultOption = {
		$w : `wrap`
	};
	const {$w} = {...defaultOption,...option};

	return `
	    flexWrap: ${$w}
	`;

}
export const fxCol = () =>{
	return `
		flexDirection: 'column'
	`;
}

export const center = (option = {})  =>{
	const defaultOption = {
		$z : `auto`
	};
	const {$z} = {...defaultOption,...option};

	return `
		zIndex: ${$z},
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	`;
}

export const wrapper = (option = {})  =>{
	const defaultOption = {
		$w : $LG
	};
	const {$w} = {...defaultOption,...option};

	return `
		maxWidth: ${$w},
		margin: '0 auto',
	`;
}
export const shadow = (option = {}) =>{
	const defaultOption = {
		$x : `5px`,
		$y : `5px`,
		$b : `5px`,
		$o : 0.1
	};
	const {$x,$y,$b,$o} = {...defaultOption,...option};

	return `
		boxShadow: ${$x} ${$y} ${$b} rgba(0,0,0,${$o})
	`;
}

export const shadowBtn = (option = {})  =>{
	const defaultOption = {
		$x : `2px`,
		$y : `2px`,
		$b : `2px`,
		$o : `rgb(177, 165, 165)`
	};
	const {$x,$y,$b,$o} = {...defaultOption,...option};

	return `
		boxShadow : ${$x} ${$y} ${$b} ${$o},
		'&:active':{
			boxShadow:'none'
		}
	`;
}

export const shadowLight = (option = {})  =>{
	const defaultOption = {
		$x : 0,
		$y : 0,
		$b : `5px`,
		$o : 0.1
	};
	const {$x,$y,$b,$o} = {...defaultOption,...option};

	return `
		boxShadow: 5px 5px 10px rgba(255,255,255,${$o})
	`;
}

export const textShadow = (option = {})  =>{
	const defaultOption = {
		$x : 0,
		$y : 0,
		$b : `5px`,
		$o : 0.5
	};
	const {$x,$y,$b,$o} = {...defaultOption,...option};

	return `
		textShadow: 5px 5px 10px rgba(0,0,0,${$o})
	`;
}

export const textShadowLight = (option = {})  =>{
	const defaultOption = {
		$x : 0,
		$y : 0,
		$b : `5px`,
		$o : 0.5
	};
	const {$x,$y,$b,$o} = {...defaultOption,...option};

	return `
		textShadow: 5px 5px 10px rgba(255,255,255,${$o})
	`;
}

export const linkHover = (option = {}) =>{
	const defaultOption = {
		$w : `2px`,
		$c : 'black',
		$g : `0.5em`,
		$s : `0.5s`
	};
	const {$w,$c,$g,$s} = {...defaultOption,...option};

	return `
		'&::after':{
			display         : 'block',
			content         : "",
			height          : ${$w},
			backgroundColor : ${$c},
			marginTop       : ${$g},
			transition      : transform ${$s},
			transform       : 'scaleX(0)',
			transformOrigin : 'right'
		},
        '&:hover':{
            '&::after':{
                transform       :'scaleX(1)',
                transformOrigin : 'left'
            }
		}
    `;
}

export const ellipsis = (option = {})  => {
	const defaultOption = {
		$w : `100%`
	};
	const {$w} = {...defaultOption,...option};

	return `
		display      : 'inlineBlock',
		width        : ${$w},
		whiteSpace   : 'nowrap',
		overflow     : 'hidden',
		textOverflow : 'ellipsis',
	`;
}

export const multiEllipsis =  (option = {})  =>{
	const defaultOption = {
		$w    : `100%`,
		$line : 3,
		$lh   : `1.2em`
	};
	const {$w,$line,$lh} = {...defaultOption,...option};

	return `
		display            : '-webkit-box',
		'-webkitLineClamp' : ${$line},
		'-webkitBoxOrient' : 'vertical',
		width              : ${$w},
		lineHeight         : ${$lh},
		height             : 'calc(${$lh} * ${$line})',
		overflow           : 'hidden',
		textOverflow       : 'ellipsis',
		textAlign          : 'left',
		wordWrap           : 'break-word',
	`;
}

export const scrollNone =  () =>{
	return `
        '-ms-overflow-style'     : 'none',
		'scrollbar-width'        : 'none',
		'&::-webkit-scrollbar'   : {
            display: 'none'
		}
	`;
}

/**************** 반응형 ****************/
// const XXL =  () =>css`
// 	@media screen and(max-width = $XXL) {
// 		@content;
//
// 	}
//
// `
// const XL =  () =>css`
// 	@media screen and(max-width = $XL) {
// 		@content;
//
// 	}
//
// `
// const LG =  () =>css`
// 	@media screen and(max-width = $LG) {
// 		@content;
//
// 	}
//
// `
// const MD =  () =>css`
// 	@media screen and(max-width = $MD) {
// 		@content;
//
// 	}
//
// `
// const SM =  () =>css`
// 	@media screen and(max-width = $SM) {
// 		@content;
//
// 	}
//
// `
// const XS =  () =>css`
// 	@media screen and(max-width = $XS) {
// 		@content;
// 	}
// `
// const HXL =  () =>css`
// 	@media screen and(max-height = $XL) {
// 		@content;
// 	}
//
// `
// const HLG =  () =>css`
// 	@media screen and(max-height = $LG) {
// 		@content;
// 	}
// `
// const HMD =  () =>css`
// 	@media screen and(max-height = $MD) {
// 		@content;
//
// 	}
//
// `
// const HSM =  () =>css`
// 	@media screen and(max-height = $SM) {
// 		@content;
//
// 	}
//
// `
//
// const HXS =  () =>css`
//
// 	@media screen and(max-height = $XS) {
// 		@content;
// 	}
//
// `