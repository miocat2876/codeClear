import React, {useEffect, useState} from 'react';
import {useIsFetching, useIsMutating} from "react-query";
import loadingPhoto from '../../../assets/image/miocat.png';
import {center} from "../../../styles/common/mixins";
import styled, {keyframes} from 'styled-components';

const dimStyled = {
	position: 'absolute',
	top: 0,
	right: 0,
	width: '100%',
	height: '100vh',
	filter: 'opacity(0.3)',
	backgroundColor: 'gray',
	zIndex: 99,
	overflow : 'none',
}
const loadingStyled = {
	...center(),
	zIndex: 100,
}

const loadingAnimation = keyframes`
	from {
		-webkit-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg);
	}
`
const LoadingImg = styled.img`
	  width: 200px;
	  height: 200px;
	  animation: ${loadingAnimation} 3s infinite linear;
  `;

const GlobalLoading = () => {
	const isFetching = useIsFetching();
	const isMutating = useIsMutating();
	const [isLoading,setIsLoading] = useState(false);
	const defaultLoading = 1000;

	useEffect(() => {
		const loading = isFetching > 0 || isMutating > 0;
		if(loading){
			setIsLoading(true);
		}
		const timeout = setTimeout(() => setIsLoading(loading), defaultLoading);
		return () => {
			clearTimeout(timeout);
		}
	},[isFetching,isMutating])

	useEffect(() => {
		if(isLoading) {
			document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; height: 100vh;`
		}
		return () => {
			const scrollY = document.body.style.top
			document.body.style.cssText = `position: ""; top: ""; min-height: "";`
			window.scrollTo(0, parseInt(scrollY || '0') * -1)
		}
	}, [isLoading])

	return (
		( isLoading) && (
			<div className="loading_wrap">
				<div className="dim" style={dimStyled}/>
				<div className="loading" style={loadingStyled}>
					<LoadingImg src={loadingPhoto} alt={'로딩중1111111111111111'}/>
				</div>
			</div>
		)
	);
};

export default GlobalLoading;