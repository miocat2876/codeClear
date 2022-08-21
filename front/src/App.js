import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import GlobalLoading from "./hoc/query/commonQuery/GlobalLoading";
import {useSelector} from "react-redux";
import Academy from "./pages/Academy";
import FreeBoardDetail from "./pages/FreeBoardDetail";
import FreeBoardWrite from './pages/FreeBoardWrite';
import FreeBoardList from './pages/FreeBoardList';
import axios from "axios";

function App() {

	const myKey = 'yxcDuG7h26fepYeGSP2foZv5FjP0wZC6';
	const sdate = '20220701';
	const edate = '20230101';
	const hrdList = 'https://www.hrd.go.kr/hrdp/api/apipo/APIPO0101T.do?returnType=XML&pageSize=10&' +
		'authKey='+myKey+
		'&sort=ASC&crseTracseSe=C0055&outType=1&srchTraStDt=20220701&pageNum=1&sortCol=TR_STT_DT&srchTraEndDt=20230101&srchTraPattern=N1&srchPart=-99&apiRequstPageUrlAdres=/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_1.jsp&apiRequstIp=14.40.58.136';
	useEffect(()=>{
		axios({
			method:'get',
			url:hrdList
		}).then(response => {console(response.data)}
		)
	})



	const browserSize = useSelector(state => state.browserSize);
	const appStyled = {
		minWidth:browserSize.size.width,
		width:'100%',
		margin : '0 auto',
	}
	//https://ko.javascript.info/modules-dynamic-imports 동적임포트
	const routerData = [{
		path    : '/',
		element : <Main/>
	},{
		path    : '/academy/*',
		element : <Academy/>
	},{
		path    : '/free-board',
		element : <FreeBoardList/>
	},{
		path    : '/free-board-detail',
		element : <FreeBoardDetail/>
	},{
		path    : '/Toast-editor',
		element : <FreeBoardWrite/>
	}]

	return (
		<div className="App" style={appStyled}>
			<BrowserRouter>
				<Header/>
				<Routes>
					{
						routerData.map((data,idx)=>{
							return <Route key={idx} path={data.path} element={data.element}/>;
						})
					}
					<Route path="*" element={<div></div>}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
				<Footer/>
			</BrowserRouter>
			<GlobalLoading/>
		</div>
	);
}

export default App;
