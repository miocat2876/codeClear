import React from 'react';
import users from './api/users';
import './App.css';
// import CounterContainer2 from './module/CounterContainer2';
// import CounterContainers from './module/CounterContainers';
import AcademyList from './pages/Main';
import Main from './pages/Main';
// import InputTest from './components/InputTest';

function App() {
  users();
  return (
    <div className="App">
      {/* <AcademyList /> */}
      {/* <CounterContainers />
      <CounterContainer2 /> */}
    </div>
  );
}

export default App;
