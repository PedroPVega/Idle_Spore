import {useState, useEffect} from 'react';
import MainScreen from '../pages/MainScreen';
import LowerNavBar from './LowerNavBar';
import UpperNavBar from './UpperNavBar';
import './App.css';
import React from 'react';

function App() {
  //const [page, setPage] = useState("main");
  /*
  return(
    <div className="App">
      <header><UpperNavBar/></header>
      <body><MainScreen/></body>
      <footer><LowerNavBar/></footer>
    </div>
  );
  */
  return(
    <div className="App">
      <UpperNavBar/>
      <MainScreen/>
      <LowerNavBar/>
    </div>
  );
}

export default App;
