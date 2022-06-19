import './variables';

const fx = ($h = $FS, $v = $ST, $w = wrap,$direction = row) => css`
	display: flex;
	justify-content: $h;
	align-items: $v;
	flex-wrap: $w;
	flex-direction: $direction;
`;

const fx_wrap = ($w = `wrap`)  =>css`
	flex-wrap: $w;
`
const fx_col = () =>css`
	flex-direction: column;
`
const center = ($z = `auto`)  =>css`
	z-index: $z;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
`
const wrapper = ($w = $LG)  =>css`
	max-width: $w;
	margin: 0 auto;
`
const shadow = ($x = `5px`,$y = `5px`,$b = `5px`,$o = 0.1) =>css`
	box-shadow: $x $y $b rgba(0,0,0,$o);
`
const shadow_btn = ($x = `2px`,$y = `2px`,$b = `2px`,$o = `rgb(177, 165, 165)`)  =>css`
	box-shadow: $x $y $b $o;
	&:active{
		box-shadow:none;
	}
`
const shadow_light = ($x = 0,$y = 0,$b = `5px`,$o = 0.1)  =>css`
	box-shadow: 5px 5px 10px rgba(255,255,255,$o);
`
const text_shadow = ($x = 0,$y = 0,$b = `5px`,$o = 0.5)  =>css`
	text-shadow: 5px 5px 10px rgba(0,0,0,$o);
`

const text_shadow_light = ($x = 0,$y = 0,$b = `5px`,$o = 0.5)  =>css`
	text-shadow: 5px 5px 10px rgba(255,255,255,$o);
`
const bt_primary = ()  => css`
	background-color: $primary;
	color: $light;
	padding: 1em 1.25em;
	cursor: pointer;
	border-radius: 4px;
	transition: all 0.5s;
	&:hover{
		background-color: $primary-light;
		color: $primary-dark;
	}
`

const header_title = ($s=`1.5rem`,$c=$dark,$w=`normal`)  =>css`
	font-size: $s;
	color: $c;
	font-weight: $w;
	text-align: center;
`

const link_hover = ($w= `2px`,$c = $dark, $g=`0.5em`,$s=`0.5s`) =>css`
	&::after{
		display: block;
		content: "";
		height: $w;
		background-color: $c;
		margin-top: $g;
		transition: transform $s;
		transform:scaleX(0);
		transform-origin: right;
	}
	 &:hover{
	 	&::after{
			transform:scaleX(1);
	 		transform-origin: left;
	 	}
	 }
`

const ellipsis = ($w = `100%`)  =>css`
	display:inline-block;
	width:$w;
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
`

const border = ($px =`1px`,$color = `black`)  =>css`
	border: $px solid $color;
`

const multiEllipsis =  ($w = `100%`,$line = 3,$lh = `1.2em`)  =>css`
	display:-webkit-box;
	-webkit-line-clamp:$line; /* 라인수 */
	-webkit-box-orient:vertical;
	width:$w;
	line-height:$lh;
	height:calc(#{$lh} * #{$line});
	overflow:hidden;
	text-overflow:ellipsis;
	text-align:left;
	word-wrap: break-word; 
`
const scrollNone =  () =>css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
			display: none; /* Chrome, Safari, Opera*/
	}
`
/**************** 반응형 ****************/
const XXL =  () =>css`
	@media screen and(max-width = $XXL) {
		@content;
		
	}
	
`
const XL =  () =>css`
	@media screen and(max-width = $XL) {
		@content;
		
	}
	
`
const LG =  () =>css`
	@media screen and(max-width = $LG) {
		@content;
		
	}
	
`
const MD =  () =>css`
	@media screen and(max-width = $MD) {
		@content;
		
	}
	
`
const SM =  () =>css`
	@media screen and(max-width = $SM) {
		@content;
		
	}
	
`
const XS =  () =>css`
	@media screen and(max-width = $XS) {
		@content;
	}
`
const HXL =  () =>css`
	@media screen and(max-height = $XL) {
		@content;
	}
	
`
const HLG =  () =>css`
	@media screen and(max-height = $LG) {
		@content;
	}
`
const HMD =  () =>css`
	@media screen and(max-height = $MD) {
		@content;
		
	}
	
`
const HSM =  () =>css`
	@media screen and(max-height = $SM) {
		@content;
		
	}

`

const HXS =  () =>css`

	@media screen and(max-height = $XS) {
		@content;
	}

`