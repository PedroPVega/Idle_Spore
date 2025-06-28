import {useState, useEffect} from 'react';
import MainScreen from '../pages/MainScreen';
import SettingsScreen from '../pages/SettingsScreen';
import GameScreen from '../pages/GameScreen';
import DiscoverPage from '../pages/DiscoverPage';
import LowerNavBar from './LowerNavBar';
import UpperNavBar from './UpperNavBar';
import './App.css';
import React from 'react';

function App() {
  const [loggedIn, SetLoggedIn] = useState(false)
  const [page, SetPage] = useState("MainScreen");

  function Navigate(goalPage)
  {
    console.log("option chosen : ", goalPage);
    switch (goalPage) 
    {
      case 'Profile':
      console.log('open profile page');
      SetPage("SettingsScreen");
      break;

      case 'Settings':
      console.log('open profile page');
      SetPage("SettingsScreen");
      break;

      case 'Logout':
      console.log('logout');
      SetLoggedIn(false);
      break;

      case 'Login':
      console.log('login page');
      SetLoggedIn(true);
      break;
            
      default:
      return () => {};
    }
  }
  return(
    <div className="App">
      <UpperNavBar page = {page} Navigate = {Navigate} login = {loggedIn} setlogin = {SetLoggedIn}/>
      {page === "MainScreen" && <MainScreen/>}
      {page === "SettingsScreen" && <SettingsScreen/>}
      {page === "GameScreen" && <GameScreen/>}
      {page === "DiscoverPage" && <DiscoverPage/>}
      <LowerNavBar page = {page} setPage = {SetPage}/>
    </div>
  );
}

export default App;
