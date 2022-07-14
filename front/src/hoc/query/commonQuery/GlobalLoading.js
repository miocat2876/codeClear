import React from 'react';
import {useIsFetching, useIsMutating} from "react-query";

const GlobalLoading = () => {
	const isFetching = useIsFetching();
	const isMutating = useIsMutating();

	const dimStyled = {
		position: 'absolute',
		top: 0,
		right: 0,
		width: '100%',
		height: '100%',
		filter: 'opacity(0.3)',
		backgroundColor: 'gray',
		zIndex: 99
	}

	return (
		( isFetching > 0 || isMutating > 0 ) && (
			<div className="loading_wrap">
				<div className="dim" style={dimStyled}></div>
				<div className="loading">
					<img src={'a'} alt={'로딩중1111111111111111'} />
				</div>
			</div>
		)
	);
};

export default GlobalLoading;