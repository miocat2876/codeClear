import React from 'react';
import { useQueryClient } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import CounterContainer2 from './module/CounterContainer2';
// import CounterContainers from './module/CounterContainers';
import AcademyList from './pages/Main';
import Main from './pages/Main';
// import InputTest from './components/InputTest';
// https://goddaehee.tistory.com/305
// https://tech.kakao.com/2022/06/13/react-query/
// https://hini7.tistory.com/151
function App() {

  

  //console.log(queryClient.getQueryData(["members",1]));
  //console.log(memberUpdate(11));

  
  //members();
  return (
    <div className="App">
      <BrowserRouter>
				{/* <Header /> */}
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/product/*" element={<AcademyList />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</BrowserRouter>
      {/* <AcademyList /> */}
      {/* <CounterContainers />
      <CounterContainer2 /> */}
    </div>
  );
}

export default App;
