import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AcademyList from './pages/Main';
import Main from './pages/Main';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import * as PropTypes from "prop-types";
import ErrorBoundary from "./context/ErrorBoundary";
import GlobalLoading from "./hoc/query/commonQuery/GlobalLoading";
import {useSelector} from "react-redux";

function App() {

	const browserSize = useSelector(state => state.browserSize);
	const appStyled = {
		minWidth:browserSize.desktop.width,
		width:'100%',
		margin : '0 auto',
	}

	return (
		<div className="App" style={appStyled}>
			<Header/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="/product/*" element={<AcademyList/>}/>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</BrowserRouter>
			<Footer/>
			<GlobalLoading/>
		</div>
	);
}

export default App;
